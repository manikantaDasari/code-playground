import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { Book, Code } from "lucide-react";
import type { Concept } from "@shared/schema";

export default function Home() {
  const [selectedConceptId, setSelectedConceptId] = useState<string>("variables");

  const { data: concepts, isLoading, error } = useQuery<Concept[]>({
    queryKey: ["/api/concepts"],
  });

  // Debug logging
  console.log("Concepts data:", concepts);
  console.log("Selected concept ID:", selectedConceptId);
  console.log("Is loading:", isLoading);
  console.log("Error:", error);

  const { data: selectedConcept } = useQuery<Concept>({
    queryKey: ["/api/concepts", selectedConceptId],
    enabled: !!selectedConceptId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading concepts...</p>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500";
      case "intermediate":
        return "bg-yellow-500";
      case "advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Code className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">The Code Playground</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Learn Python from JavaScript</span>
              <Button className="bg-blue-600 hover:bg-blue-700" data-testid="button-guide">
                <Book className="h-4 w-4 mr-2" />
                Guide
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Master Programming Concepts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore fundamental programming concepts with side-by-side JavaScript and Python examples
            </p>
          </div>
          
          {/* Concept Selection Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {concepts?.map((concept) => (
              <button
                key={concept.id}
                onClick={() => {
                  console.log("Button clicked for concept:", concept.id);
                  setSelectedConceptId(concept.id);
                }}
                className={`concept-btn bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-2 active:scale-95 group ${
                  selectedConceptId === concept.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-transparent hover:border-blue-200'
                }`}
                data-testid={`button-concept-${concept.id}`}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-12 h-12 ${concept.iconColor} rounded-lg flex items-center justify-center group-hover:opacity-80 transition-opacity`}>
                    <i className={`${concept.icon} text-xl`}></i>
                  </div>
                  <span className="font-medium text-gray-900">{concept.title.split(' - ')[0]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Split Screen Code Area */}
      {selectedConcept && (
        <main className="flex-1 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Concept Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" data-testid="text-concept-title">
                    {selectedConcept.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1" data-testid="text-concept-description">
                    {selectedConcept.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Difficulty:</span>
                  <div className="flex space-x-1">
                    <div className={`w-2 h-2 rounded-full ${getDifficultyColor(selectedConcept.difficulty)}`}></div>
                    <div className={`w-2 h-2 rounded-full ${selectedConcept.difficulty === 'beginner' ? 'bg-gray-300' : getDifficultyColor(selectedConcept.difficulty)}`}></div>
                    <div className={`w-2 h-2 rounded-full ${selectedConcept.difficulty === 'advanced' ? getDifficultyColor(selectedConcept.difficulty) : 'bg-gray-300'}`}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Split Screen Code Display */}
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* JavaScript Panel */}
              <CodeBlock
                code={selectedConcept.examples.javascript.code}
                language="javascript"
                className="border-b lg:border-b-0 lg:border-r border-gray-200"
              />

              {/* Python Panel */}
              <CodeBlock
                code={selectedConcept.examples.python.code}
                language="python"
              />
            </div>

            {/* Comments and Explanations */}
            <div className="grid lg:grid-cols-2 gap-6 p-6 bg-gray-50">
              {/* JavaScript Comments */}
              <Card className="border-orange-200">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <div className="w-4 h-4 bg-js-orange rounded mr-2"></div>
                    JavaScript Features
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {selectedConcept.comparison.javascript.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-js-orange mr-2">•</span>
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Python Comments */}
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <div className="w-4 h-4 bg-python-green rounded mr-2"></div>
                    Python Features
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {selectedConcept.comparison.python.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-python-green mr-2">•</span>
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Side-by-Side Comparison */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border-t border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-balance-scale text-blue-600 mr-2"></i>
                Side-by-Side Comparison
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-orange-200">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-js-orange mb-2">JavaScript Characteristics</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {selectedConcept.comparison.javascript.map((char, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span dangerouslySetInnerHTML={{ __html: char }} />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-python-green mb-2">Python Characteristics</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {selectedConcept.comparison.python.map((char, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span dangerouslySetInnerHTML={{ __html: char }} />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="font-semibold">The Code Playground</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
              <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 The Code Playground. Learn programming concepts through comparison.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
