import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { useData, type Article } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Eye, EyeOff, X, ExternalLink, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ArticleEditor: React.FC = () => {
  const { articles, addArticle, updateArticle, deleteArticle } = useData();
  const { toast } = useToast();
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const emptyArticle: Omit<Article, 'id'> = {
    title: '',
    excerpt: '',
    url: '',
    date: new Date().getFullYear().toString(),
    tags: [],
    readTime: '',
    featured: false,
    visible: true
  };

  const [formData, setFormData] = useState<Omit<Article, 'id'> | Article>(emptyArticle);
  const [newTag, setNewTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if ('id' in formData) {
      // Updating existing article
      updateArticle(formData.id, formData);
      toast({
        title: "Article updated",
        description: "The article has been updated successfully.",
      });
    } else {
      // Adding new article
      addArticle(formData);
      toast({
        title: "Article added",
        description: "New article has been added successfully.",
      });
    }
    
    setFormData(emptyArticle);
    setEditingArticle(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (article: Article) => {
    setFormData(article);
    setEditingArticle(article);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteArticle(id);
    toast({
      title: "Article deleted",
      description: "The article has been removed.",
    });
  };

  const toggleVisibility = (id: string, visible: boolean) => {
    updateArticle(id, { visible });
    toast({
      title: `Article ${visible ? 'shown' : 'hidden'}`,
      description: `The article is now ${visible ? 'visible' : 'hidden'} on your portfolio.`,
    });
  };

  const toggleFeatured = (id: string, featured: boolean) => {
    updateArticle(id, { featured });
    toast({
      title: `Article ${featured ? 'featured' : 'unfeatured'}`,
      description: `The article is now ${featured ? 'featured' : 'unfeatured'}.`,
    });
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      {/* Add New Article Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            onClick={() => {
              setFormData(emptyArticle);
              setEditingArticle(null);
            }}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add New Article
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingArticle ? 'Edit Article' : 'Add New Article'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Article title..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief description of the article..."
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="url">Article URL</Label>
                <Input
                  id="url"
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://..."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Publication Date/Year</Label>
                <Input
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  placeholder="2024"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="readTime">Read Time (optional)</Label>
              <Input
                id="readTime"
                value={formData.readTime || ''}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                placeholder="e.g., 5 min"
              />
            </div>

            {/* Tags Section */}
            <div className="space-y-4">
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-2">
                    {tag}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 hover:bg-transparent"
                      onClick={() => removeTag(index)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add tag (e.g., AML, Blockchain)"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addTag();
                    }
                  }}
                />
                <Button type="button" onClick={addTag} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                />
                <Label htmlFor="featured">Featured article</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="visible"
                  checked={formData.visible}
                  onCheckedChange={(checked) => setFormData({ ...formData, visible: checked })}
                />
                <Label htmlFor="visible">Visible on portfolio</Label>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                {editingArticle ? 'Update Article' : 'Add Article'}
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

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map((article) => (
          <Card key={article.id} className={`glass-effect ${!article.visible ? 'opacity-60' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    {article.featured && (
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    {article.readTime && <span>{article.readTime}</span>}
                    <Button
                      variant="link"
                      size="sm"
                      asChild
                      className="p-0 h-auto text-xs"
                    >
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Article
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {article.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{article.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFeatured(article.id, !article.featured)}
                    title={article.featured ? 'Remove from featured' : 'Mark as featured'}
                  >
                    <Star className={`w-4 h-4 ${article.featured ? 'fill-current text-accent' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleVisibility(article.id, !article.visible)}
                  >
                    {article.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(article)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(article.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
        
        {articles.length === 0 && (
          <Card className="glass-effect">
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No articles added yet.</p>
              <p className="text-sm text-muted-foreground">Click "Add New Article" to get started.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ArticleEditor;