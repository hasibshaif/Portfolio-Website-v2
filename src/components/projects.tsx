import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://ecommerce-platform-demo.com"
    },
    {
      title: "Task Management App",
      description: "A productivity app with drag-and-drop interface and team collaboration features.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
      github: "https://github.com/yourusername/task-management-app",
      live: "https://task-app-demo.com"
    },
    {
      title: "Weather Forecast Dashboard",
      description: "An interactive weather dashboard with data visualization and location-based forecasts.",
      technologies: ["React", "D3.js", "Node.js", "OpenWeatherMap API"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://weather-dashboard-demo.com"
    }
  ]

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-primary-foreground">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="border-primary text-primary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary-foreground">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-primary-foreground">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}