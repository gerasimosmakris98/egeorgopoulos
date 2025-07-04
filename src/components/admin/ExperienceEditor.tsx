import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { useData, type Experience } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Eye, EyeOff, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ExperienceEditor: React.FC = () => {
  const { experiences, addExperience, updateExperience, deleteExperience } = useData();
  const { toast } = useToast();
  const [editingExp, setEditingExp] = useState<Experience | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const emptyExperience: Omit<Experience, 'id'> = {
    title: '',
    company: '',
    location: '',
    period: '',
    type: 'Full-time',
    description: '',
    responsibilities: [],
    skills: [],
    achievements: [],
    visible: true
  };

  const [formData, setFormData] = useState<Omit<Experience, 'id'> | Experience>(emptyExperience);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if ('id' in formData) {
      // Updating existing experience
      updateExperience(formData.id, formData);
      toast({
        title: "Experience updated",
        description: "The experience has been updated successfully.",
      });
    } else {
      // Adding new experience
      addExperience(formData);
      toast({
        title: "Experience added",
        description: "New experience has been added successfully.",
      });
    }
    
    setFormData(emptyExperience);
    setEditingExp(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (exp: Experience) => {
    setFormData(exp);
    setEditingExp(exp);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteExperience(id);
    toast({
      title: "Experience deleted",
      description: "The experience has been removed.",
    });
  };

  const toggleVisibility = (id: string, visible: boolean) => {
    updateExperience(id, { visible });
    toast({
      title: `Experience ${visible ? 'shown' : 'hidden'}`,
      description: `The experience is now ${visible ? 'visible' : 'hidden'} on your portfolio.`,
    });
  };

  const addListItem = (field: 'responsibilities' | 'skills' | 'achievements', value: string) => {
    if (value.trim()) {
      setFormData({
        ...formData,
        [field]: [...(formData[field] as string[]), value.trim()]
      });
    }
  };

  const removeListItem = (field: 'responsibilities' | 'skills' | 'achievements', index: number) => {
    setFormData({
      ...formData,
      [field]: (formData[field] as string[]).filter((_, i) => i !== index)
    });
  };

  const ListEditor = ({ 
    title, 
    field, 
    placeholder 
  }: { 
    title: string; 
    field: 'responsibilities' | 'skills' | 'achievements'; 
    placeholder: string;
  }) => {
    const [newItem, setNewItem] = useState('');
    
    return (
      <div className="space-y-2">
        <Label>{title}</Label>
        <div className="space-y-2">
          {(formData[field] as string[]).map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Badge variant="outline" className="flex-1 justify-start">
                {item}
              </Badge>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeListItem(field, index)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <div className="flex gap-2">
            <Input
              placeholder={placeholder}
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addListItem(field, newItem);
                  setNewItem('');
                }
              }}
            />
            <Button
              type="button"
              onClick={() => {
                addListItem(field, newItem);
                setNewItem('');
              }}
              size="sm"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Add New Experience Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            onClick={() => {
              setFormData(emptyExperience);
              setEditingExp(null);
            }}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add New Experience
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingExp ? 'Edit Experience' : 'Add New Experience'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="period">Period</Label>
                <Input
                  id="period"
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  placeholder="e.g., Jan 2023 - Present"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Employment Type</Label>
                <Input
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  placeholder="e.g., Full-time, Internship"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                required
              />
            </div>

            <ListEditor
              title="Responsibilities"
              field="responsibilities"
              placeholder="Add a responsibility..."
            />

            <ListEditor
              title="Skills"
              field="skills"
              placeholder="Add a skill..."
            />

            <ListEditor
              title="Achievements (optional)"
              field="achievements"
              placeholder="Add an achievement..."
            />

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
                {editingExp ? 'Update Experience' : 'Add Experience'}
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

      {/* Experiences List */}
      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card key={exp.id} className={`glass-effect ${!exp.visible ? 'opacity-60' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{exp.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} • {exp.location} • {exp.period}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleVisibility(exp.id, !exp.visible)}
                  >
                    {exp.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(exp)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(exp.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{exp.description}</p>
              <div className="flex flex-wrap gap-1">
                {exp.skills.slice(0, 5).map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {exp.skills.length > 5 && (
                  <Badge variant="outline" className="text-xs">
                    +{exp.skills.length - 5} more
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
        
        {experiences.length === 0 && (
          <Card className="glass-effect">
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No experiences added yet.</p>
              <p className="text-sm text-muted-foreground">Click "Add New Experience" to get started.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ExperienceEditor;