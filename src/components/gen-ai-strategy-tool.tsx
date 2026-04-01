'use client';

import * as React from 'react';
import {generateStrategicQuestions} from '@/ai/flows/generate-strategic-questions';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Sparkles, Loader2, RefreshCw} from 'lucide-react';
import {useToast} from '@/hooks/use-toast';

export function GenAIStrategyTool() {
  const [businessType, setBusinessType] = React.useState('');
  const [challenges, setChallenges] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState<string[]>([]);
  const {toast} = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType || !challenges) {
      toast({
        title: "Missing fields",
        description: "Please fill in both business type and challenges.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const result = await generateStrategicQuestions({businessType, challenges});
      setQuestions(result);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate questions. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setQuestions([]);
    setBusinessType('');
    setChallenges('');
  };

  return (
    <div className="w-full">
      {questions.length === 0 ? (
        <Card className="animated-card bg-secondary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-accent" size={20} />
              AI Growth Strategy Tool
            </CardTitle>
            <CardDescription>
              Input your details to get custom strategic questions that can unlock your next level of growth.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Business Type</label>
                <Input
                  placeholder="e.g., B2B SaaS, E-commerce fashion brand..."
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Core Challenges</label>
                <Textarea
                  placeholder="e.g., High churn rates, stagnating ad performance..."
                  value={challenges}
                  onChange={(e) => setChallenges(e.target.value)}
                  className="bg-background border-border min-h-[100px]"
                />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : <Sparkles className="mr-2" size={18} />}
                Generate Strategic Analysis
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card className="animated-card bg-card shadow-2xl shadow-accent/5 animate-in fade-in zoom-in duration-500">
          <CardHeader>
            <CardTitle className="text-accent">Strategic Growth Roadmap</CardTitle>
            <CardDescription>
              Based on your {businessType} profile, our AI suggests you consider these critical questions:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1 bg-primary">
                <a href="#contact-form">Discuss these with an expert</a>
              </Button>
              <Button variant="outline" onClick={handleReset} className="border-border">
                <RefreshCw className="mr-2" size={16} /> Start Over
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}