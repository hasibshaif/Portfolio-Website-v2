import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <Card className="bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Contact Me</CardTitle>
          <CardDescription className="text-muted-foreground">
            Feel free to reach out if you have any questions or opportunities!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-primary-foreground">Name</label>
                <Input id="name" placeholder="Your Name" className="bg-input text-input-foreground" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-primary-foreground">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-input text-input-foreground" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-primary-foreground">Message</label>
              <Textarea id="message" placeholder="Your message here..." rows={4} className="bg-input text-input-foreground" />
            </div>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}