import { Button } from "@/components/ui/button";
import { FileText, Video, BookOpen } from "lucide-react";

interface Resource {
  title: string;
  type: string;
  url: string;
}

interface Props {
  resources: Resource[];
}

const resourceIcons = {
  slides: FileText,
  video: Video,
  document: BookOpen,
  workshop: BookOpen,
};

export function UnitResources({ resources }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {resources.map((resource, index) => {
        const Icon = resourceIcons[resource.type as keyof typeof resourceIcons] || BookOpen;
        
        return (
          <Button
            key={index}
            variant="outline"
            className="justify-start h-auto py-4"
            asChild
          >
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              <Icon className="mr-2 h-4 w-4" />
              <div className="text-left">
                <div className="font-medium">{resource.title}</div>
                <div className="text-sm text-muted-foreground capitalize">
                  {resource.type}
                </div>
              </div>
            </a>
          </Button>
        );
      })}
    </div>
  );
}