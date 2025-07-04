import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useData } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Plus, X } from 'lucide-react';

const PersonalInfoEditor: React.FC = () => {
  const { personalInfo, updatePersonalInfo } = useData();
  const { toast } = useToast();
  const [formData, setFormData] = useState(personalInfo);
  const [newBadge, setNewBadge] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePersonalInfo(formData);
    toast({
      title: "Personal info updated",
      description: "Your personal information has been saved successfully.",
    });
  };

  const addBadge = () => {
    if (newBadge.trim()) {
      setFormData({
        ...formData,
        badges: [...formData.badges, newBadge.trim()]
      });
      setNewBadge('');
    }
  };

  const removeBadge = (index: number) => {
    setFormData({
      ...formData,
      badges: formData.badges.filter((_, i) => i !== index)
    });
  };

  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <p className="text-sm text-muted-foreground">
          Update your basic information, CV link, and profile badges
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentPosition">Current Position</Label>
            <Input
              id="currentPosition"
              value={formData.currentPosition}
              onChange={(e) => setFormData({ ...formData, currentPosition: e.target.value })}
              required
            />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Label htmlFor="linkedInLink">LinkedIn Profile URL</Label>
              <Input
                id="linkedInLink"
                type="url"
                value={formData.linkedInLink}
                onChange={(e) => setFormData({ ...formData, linkedInLink: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cvLink">CV Download Link</Label>
            <Input
              id="cvLink"
              type="url"
              value={formData.cvLink}
              onChange={(e) => setFormData({ ...formData, cvLink: e.target.value })}
              required
            />
          </div>

          {/* Badges Section */}
          <div className="space-y-4">
            <Label>Profile Badges</Label>
            <div className="flex flex-wrap gap-2">
              {formData.badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-2">
                  {badge}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 hover:bg-transparent"
                    onClick={() => removeBadge(index)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add new badge (e.g., 🎯 New Skill)"
                value={newBadge}
                onChange={(e) => setNewBadge(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addBadge();
                  }
                }}
              />
              <Button type="button" onClick={addBadge} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Save Personal Information
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoEditor;