/* eslint-disable react/prop-types */
import { Dumbbell, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section className="relative h-[50vh] flex items-center justify-center">
            <img
              src="https://content.jdmagicbox.com/comp/bhiwandi/x3/022pxx22.xx22.170919131909.m1x3/catalogue/d-n-sports-club-gym-bhiwandi-city-bhiwandi-sports-clubs-cel606pzj4.jpg"
              alt="Gym interior"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                About FitLife Gym
              </h1>
              <p className="text-xl text-white">
                Empowering You to Reach Your Fitness Goals
              </p>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-center max-w-3xl mx-auto">
                At FitLife Gym, we are dedicated to helping individuals of all
                fitness levels achieve their personal health and wellness goals.
                We believe in creating a supportive community that motivates and
                inspires each member to become the best version of themselves.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose FitLife?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Dumbbell,
                    title: "State-of-the-Art Equipment",
                    description:
                      "Access to the latest fitness technology and equipment",
                  },
                  {
                    icon: Users,
                    title: "Expert Trainers",
                    description:
                      "Certified professionals to guide your fitness journey",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Access",
                    description:
                      "Work out on your schedule with round-the-clock gym access",
                  },
                  {
                    icon: Award,
                    title: "Diverse Classes",
                    description:
                      "Wide range of classes for all interests and fitness levels",
                  },
                ].map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <feature.icon className="w-10 h-10 mb-2 text-primary" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Jane Doe",
                    role: "Head Trainer",
                    image: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
                  },
                  {
                    name: "John Smith",
                    role: "Nutrition Specialist",
                    image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                  },
                  {
                    name: "Emily Brown",
                    role: "Yoga Instructor",
                    image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1729036800&semt=ais_hybrid",
                  },
                ].map((member, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-semibold text-center">
                        {member.name}
                      </h3>
                      <p className="text-center text-muted-foreground">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="text-xl mb-8">
                Join FitLife Gym today and transform your life!
              </p>
              <Button asChild size="lg">
                <Link href="/join">Become a Member</Link>
              </Button>
            </div>
          </section>
        </main>

        <footer className="bg-muted py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 FitLife Gym. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Aboutus;
// Card Component
const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold">{children}</h3>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// Button Component
const Button = ({ asChild, size, children }) => {
  const Component = asChild ? "span" : "button";
  return <Component className={`btn btn-${size}`}>{children}</Component>;
};

export { Card, CardHeader, CardTitle, CardContent, Button };
