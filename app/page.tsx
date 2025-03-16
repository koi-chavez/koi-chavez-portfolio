import Link from "next/link";
import { ArrowRight, Code, HeartHandshake, Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <User className="h-5 w-5" />
            <span>Koi Chavez</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Koi Chavez
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Front-End Developer turned Customer Support Engineer
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="gap-1">
                      Contact Me
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="/portfolio.png?height=550&width=450"
                alt="Profile"
                width={550}
                height={450}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hi, I’m Koi Chavez! I started my career as a Front-End
                Developer, building user-friendly and accessible web experiences
                with React. Over time, I discovered a passion for
                problem-solving beyond code, leading me to transition into
                Customer Support Engineering. Now, I bridge the gap between
                technical teams and customers, helping businesses optimize their
                digital experiences. With a background in development and a deep
                understanding of user needs, I thrive in roles that blend
                technical expertise with customer success.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Code className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Technical Background</CardTitle>
                    <CardDescription>
                      Front-End Development Expertise
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>React, Next.js, and modern JavaScript frameworks</li>
                    <li>Responsive design and UI/UX principles</li>
                    <li>Performance optimization and accessibility</li>
                    <li>Version control and collaborative development</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <HeartHandshake className="h-8 w-8 text-secondary" />
                  <div>
                    <CardTitle>Customer Success Skills</CardTitle>
                    <CardDescription>
                      Building Strong Relationships
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Client onboarding and relationship management</li>
                    <li>Technical problem-solving and troubleshooting</li>
                    <li>Product training and adoption strategies</li>
                    <li>Customer advocacy and feedback collection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-tl from-primary/5 to-secondary/5"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experience
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My career journey from development to customer success
              </p>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="customer-success" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-muted">
                  <TabsTrigger
                    value="customer-success"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Customer Success
                  </TabsTrigger>
                  <TabsTrigger
                    value="development"
                    className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                  >
                    Development
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="customer-success"
                  className="space-y-6 pt-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Customer Support Engineer
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Marigold • 2024-Present
                    </p>
                    <p className="text-muted-foreground">
                      Provide technical support and guidance to customers,
                      helping them troubleshoot issues, optimize their use of
                      our platform, and ensure a seamless experience. I work
                      closely with cross-functional teams to diagnose technical
                      problems, communicate solutions effectively, and advocate
                      for customer needs. With my background in front-end
                      development, I bring a problem-solving mindset and a
                      technical perspective to customer interactions, bridging
                      the gap between users and engineering.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="development" className="space-y-6 pt-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Front-End Developer II
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Overstock.com • 2023-2023
                    </p>
                    <p className="text-muted-foreground">
                      Developed reusable HTML, CSS, and JavaScript modules to
                      enhance code efficiency and maintainability. Partnered
                      with cross-functional teams to implement new features,
                      improving user experience and customer satisfaction.
                      Optimized React.js components to boost page load times by
                      15%, creating a more seamless browsing experience.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Front End Developer I</h3>
                    <p className="text-sm text-muted-foreground">
                      Overstock.com • 2022-2023
                    </p>
                    <p className="text-muted-foreground">
                      Led the integration of a headless CMS in collaboration
                      with a third-party provider, modernizing content
                      management workflows. Built and maintained internal
                      applications using Node.js and Express, streamlining
                      internal processes. Coordinated with multiple teams to
                      enhance site performance and ensure a smooth user
                      experience.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Associate Front End Developer
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Overstock.com • 2020-2022
                    </p>
                    <p className="text-muted-foreground">
                      Implemented Google One Tap login, simplifying user
                      authentication and enhancing accessibility. Developed ESG
                      static pages with Next.js, ensuring an intuitive and
                      responsive user interface. Created reusable front-end
                      components with HTML, CSS, and JavaScript, improving
                      development efficiency and consistency.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;m always open to discussing new opportunities and how
                    my unique skill set can benefit your team.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <span>koi.chavez@gmail.com</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Koi Chavez. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/koi-chavez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/koi-chavez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
