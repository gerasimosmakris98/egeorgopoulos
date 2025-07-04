import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useData } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { Plus, X } from 'lucide-react';

const ContactEditor: React.FC = () => {
  const { contactInfo, updateContactInfo } = useData();
  const { toast } = useToast();
  const [formData, setFormData] = useState(contactInfo);
  const [newLink, setNewLink] = useState({ name: '', url: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateContactInfo(formData);
    toast({
      title: "Contact info updated",
      description: "Your contact information has been saved successfully.",
    });
  };

  const addLink = () => {
    if (newLink.name.trim() && newLink.url.trim()) {
      setFormData({
        ...formData,
        additionalLinks: [...formData.additionalLinks, { ...newLink }]
      });
      setNewLink({ name: '', url: '' });
    }
  };

  const removeLink = (index: number) => {
    setFormData({
      ...formData,
      additionalLinks: formData.additionalLinks.filter((_, i) => i !== index)
    });
  };

  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <p className="text-sm text-muted-foreground">
          Update your contact details and additional links
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+34 xxx xxx xxx"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </div>

          {/* Additional Links Section */}
          <div className="space-y-4">
            <Label>Additional Links</Label>
            <p className="text-sm text-muted-foreground">
              Add links to other professional profiles, portfolios, or relevant websites
            </p>
            
            <div className="space-y-2">
              {formData.additionalLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Badge variant="outline" className="flex-1 justify-start">
                    <span className="font-medium mr-2">{link.name}:</span>
                    <span className="text-muted-foreground">{link.url}</span>
                  </Badge>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeLink(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input
                placeholder="Link name (e.g., GitHub, Portfolio)"
                value={newLink.name}
                onChange={(e) => setNewLink({ ...newLink, name: e.target.value })}
              />
              <div className="flex gap-2">
                <Input
                  placeholder="URL (https://...)"
                  type="url"
                  value={newLink.url}
                  onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addLink();
                    }
                  }}
                />
                <Button type="button" onClick={addLink} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Save Contact Information
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactEditor;