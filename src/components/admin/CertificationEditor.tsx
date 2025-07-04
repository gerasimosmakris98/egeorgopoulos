import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useData, type Certification } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const CertificationEditor: React.FC = () => {
  const { certifications, addCertification, updateCertification, deleteCertification } = useData();
  const { toast } = useToast();
  const [editingCert, setEditingCert] = useState<Certification | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const emptyCertification: Omit<Certification, 'id'> = {
    name: '',
    issuer: '',
    link: '',
    visible: true
  };

  const [formData, setFormData] = useState<Omit<Certification, 'id'> | Certification>(emptyCertification);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if ('id' in formData) {
      // Updating existing certification
      updateCertification(formData.id, formData);
      toast({
        title: "Certification updated",
        description: "The certification has been updated successfully.",
      });
    } else {
      // Adding new certification
      addCertification(formData);
      toast({
        title: "Certification added",
        description: "New certification has been added successfully.",
      });
    }
    
    setFormData(emptyCertification);
    setEditingCert(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (cert: Certification) => {
    setFormData(cert);
    setEditingCert(cert);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteCertification(id);
    toast({
      title: "Certification deleted",
      description: "The certification has been removed.",
    });
  };

  const toggleVisibility = (id: string, visible: boolean) => {
    updateCertification(id, { visible });
    toast({
      title: `Certification ${visible ? 'shown' : 'hidden'}`,
      description: `The certification is now ${visible ? 'visible' : 'hidden'} on your portfolio.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Add New Certification Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            onClick={() => {
              setFormData(emptyCertification);
              setEditingCert(null);
            }}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add New Certification
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingCert ? 'Edit Certification' : 'Add New Certification'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Certification Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Blockchain Certification"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issuer">Issuing Organization</Label>
              <Input
                id="issuer"
                value={formData.issuer}
                onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                placeholder="e.g., University of Athens"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="link">Verification Link (optional)</Label>
              <Input
                id="link"
                type="url"
                value={formData.link || ''}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="https://..."
              />
              <p className="text-xs text-muted-foreground">
                Add a link to verify the certification (e.g., Credly, LinkedIn Learning, etc.)
              </p>
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
                {editingCert ? 'Update Certification' : 'Add Certification'}
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

      {/* Certifications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <Card key={cert.id} className={`glass-effect ${!cert.visible ? 'opacity-60' : ''}`}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-base leading-tight">{cert.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  {cert.link && (
                    <Button
                      variant="link"
                      size="sm"
                      asChild
                      className="p-0 h-auto text-xs text-primary"
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Verify
                      </a>
                    </Button>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleVisibility(cert.id, !cert.visible)}
                  >
                    {cert.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(cert)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(cert.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
        
        {certifications.length === 0 && (
          <Card className="glass-effect md:col-span-2">
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No certifications added yet.</p>
              <p className="text-sm text-muted-foreground">Click "Add New Certification" to get started.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CertificationEditor;