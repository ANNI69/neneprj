/* eslint-disable react/prop-types */
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const ContactUs = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form and we will get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="johndoe@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-primary" />
                    <span>123 Fitness Street, Muscle City, MC 12345</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-primary" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="text-primary" />
                    <span>contact@gymworkoutmovie.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-primary" />
                  <span className="sr-only">Map placeholder</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-primary-foreground/80">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:text-primary-foreground/80">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="hover:text-primary-foreground/80">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <p className="text-center mt-4">&copy; 2024 GYM And Workout Movie. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default ContactUs

const Card = ({ children }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {children}
    </div>
);

const CardHeader = ({ children }) => (
    <div className="p-4 border-b">
        {children}
    </div>
);

const CardTitle = ({ children }) => (
    <h2 className="text-xl font-semibold">
        {children}
    </h2>
);

const CardDescription = ({ children }) => (
    <p className="text-gray-600">
        {children}
    </p>
);

const CardContent = ({ children }) => (
    <div className="p-4">
        {children}
    </div>
);

const CardFooter = ({ children }) => (
    <div className="p-4 border-t">
        {children}
    </div>
);

const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {children}
    </label>
);

const Input = ({ id, type = "text", placeholder }) => (
    <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
    />
);

const Textarea = ({ id, placeholder }) => (
    <textarea
        id={id}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
    />
);

const Button = ({ children, className }) => (
    <button className={`bg-primary text-white py-2 px-4 rounded ${className}`}>
        {children}
    </button>
);