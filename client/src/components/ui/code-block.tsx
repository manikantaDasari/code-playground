import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeBlockProps {
  code: string;
  language: "javascript" | "python";
  className?: string;
}

export function CodeBlock({ code, language, className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Code copied!",
        description: "The code has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy code to clipboard.",
        variant: "destructive",
      });
    }
  };

  const languageConfig = {
    javascript: {
      color: "bg-js-orange",
      hoverColor: "text-orange-100 hover:text-white",
      icon: "fab fa-js-square",
      name: "JavaScript"
    },
    python: {
      color: "bg-python-green", 
      hoverColor: "text-green-100 hover:text-white",
      icon: "fab fa-python",
      name: "Python"
    }
  };

  const config = languageConfig[language];

  return (
    <div className={`flex-1 ${className}`}>
      <div className={`${config.color} text-white px-6 py-3 flex items-center justify-between`}>
        <div className="flex items-center space-x-3">
          <i className={`${config.icon} text-xl`}></i>
          <span className="font-semibold">{config.name}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className={`${config.hoverColor} transition-colors p-2 h-auto`}
          data-testid={`button-copy-${language}`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="p-6 bg-gray-50 h-full">
        <pre className={`language-${language} bg-code-bg rounded-lg p-4 text-sm overflow-x-auto`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
