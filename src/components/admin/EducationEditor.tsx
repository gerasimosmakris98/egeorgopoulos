import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useData, type Education } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const EducationEditor: React.FC = () => {
  const { education, addEducation, updateEducationItem, deleteEducation } = useData();
  const { toast } = useToast();
  const [editingEdu, setEditingEdu] = useState<Education | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const emptyEducation: Omit<Education, 'id'> = {
    degree: '',
    institution: '',
    status: 'Completed',
    visible: true
  };

  const [formData, setFormData] = useState<Omit<Education, 'id'> | Education>(emptyEducation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if ('id' in formData) {
      // Updating existing education
      updateEducationItem(formData.id, formData);
      toast({
        title: "Education updated",
        description: "The education entry has been updated successfully.",
      });
    } else {
      // Adding new education
      addEducation(formData);
      toast({
        title: "Education added",
        description: "New education entry has been added successfully.",
      });
    }
    
    setFormData(emptyEducation);
    setEditingEdu(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (edu: Education) => {
    setFormData(edu);
    setEditingEdu(edu);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteEducation(id);
    toast({
      title: "Education deleted",
      description: "The education entry has been removed.",
    });
  };

  const toggleVisibility = (id: string, visible: boolean) => {
    updateEducationItem(id, { visible });
    toast({
      title: `Education ${visible ? 'shown' : 'hidden'}`,
      description: `The education entry is now ${visible ? 'visible' : 'hidden'} on your portfolio.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Add New Education Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            onClick={() => {
              setFormData(emptyEducation);
              setEditingEdu(null);
            }}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add New Education
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingEdu ? 'Edit Education' : 'Add New Education'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree/Program</Label>
              <Input
                id="degree"
                value={formData.degree}
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                placeholder="e.g., Master's in Compliance"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="institution">Institution</Label>
              <Input
                id="institution"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="e.g., Universidad Católica de Ávila"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                placeholder="e.g., Completed, In Progress, Expected 2025"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="visible"
                checked={formData.visible}
                onCheckedChange={(checked) => setFormData({ ...formData, visible: checked })}
              />
              <Label htmlFor="visible">Visible on portfolio</Label>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                {editingEdu ? 'Update Education' : 'Add Education'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Education List */}
      <div className="space-y-4">
        {education.map((edu) => (
          <Card key={edu.id} className={`glass-effect ${!edu.visible ? 'opacity-60' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution} • {edu.status}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleVisibility(edu.id, !edu.visible)}
                  >
                    {edu.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(edu)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(edu.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
        
        {education.length === 0 && (
          <Card className="glass-effect">
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No education entries added yet.</p>
              <p className="text-sm text-muted-foreground">Click "Add New Education" to get started.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EducationEditor;