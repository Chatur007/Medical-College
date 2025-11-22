import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Building,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Hospital,
  Hotel,
  Users,
  Presentation,
  ShieldAlert,
  Target,
  Quote,
} from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { HeroCtaButton } from '@/components/hero-cta-button';
import { facilities, messages, affiliations } from '@/lib/data';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-nursing-education') as ImagePlaceholder;
const directorImage = PlaceHolderImages.find(p => p.id === 'director-photo') as ImagePlaceholder;
const principalImage = PlaceHolderImages.find(p => p.id === 'principal-photo') as ImagePlaceholder;

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] text-white">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold !text-white drop-shadow-lg">
            Shaping Compassionate Nursing Professionals
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl !text-gray-200 drop-shadow-md">
            Offering high-quality nursing education with strong clinical
            exposure, fostering values and professional excellence for a noble
            career in healthcare.
          </p>
          <div className="mt-8">
            <HeroCtaButton />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-20 space-y-20 md:space-y-28">
        {/* About the College */}
        <section id="about" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                About The College
              </h2>
              <p className="text-lg text-muted-foreground">
                The Dr. V. P. Kanakaraddi Memorial College of Nursing, established in 2023, is a premier institution in the Bagalkote district of Karnataka. As a unit of the Om Sai Education Society, we are dedicated to providing exceptional nursing education.
              </p>
              <p className="text-muted-foreground">
                We offer a comprehensive B.Sc Nursing program designed to equip students with the knowledge and skills needed for a successful career. Our college is affiliated with the prestigious Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru, and is fully recognized by the Government of Karnataka and the Karnataka State Nursing Council (KNC).
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <video
                className="h-full w-full object-cover"
                src="/Videos/WhatsApp Video 2025-11-22 at 10.18.06 AM.mp4"
                poster={PlaceHolderImages.find(p => p.id === 'college-campus-1')?.imageUrl || ''}
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Philosophy */}
        <section id="mission-vision">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become a centre of excellence with social concern, equipping students with high standards of education, practice, and ethics to deliver value-based nursing education.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <HeartHandshake className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide quality academic and clinical training, producing nursing graduates who are competent and sensitive to diverse healthcare needs at national and global levels.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Our Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe health is a state of complete well-being. Our philosophy focuses on holistic development, compassion, ethics, and professional competence in every student.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Messages */}
        <section id="messages">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Words from Our Leaders</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {messages.map((msg, index) => (
                    <Card key={index} className="overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-1/3 relative min-h-[200px] sm:min-h-full">
                                <Image 
                                    src={msg.id === 'director' ? directorImage.imageUrl : principalImage.imageUrl} 
                                    alt={msg.name} 
                                    fill 
                                    className="object-cover object-top"
                                    data-ai-hint={msg.id === 'director' ? directorImage.imageHint : principalImage.imageHint}
                                />
                            </div>
                            <div className="sm:w-2/3 p-6 flex flex-col">
                                <Quote className="w-8 h-8 text-primary/50 mb-2" />
                                <p className="text-muted-foreground flex-grow">{msg.message}</p>
                                <div className="mt-4 pt-4 border-t">
                                    <p className="font-bold text-lg text-primary">{msg.name}</p>
                                    <p className="text-sm text-muted-foreground">{msg.role}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>

        {/* Facilities */}
        <section id="facilities">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              State-of-the-Art Facilities
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              We provide a comprehensive infrastructure to support an excellent learning experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="flex items-start p-6 space-x-4 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg">{facility.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{facility.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{facility.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Affiliations & Approvals */}
        <section id="affiliations">
            <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                    Recognized & Approved
                </h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    Our college is proud to be affiliated with and recognized by leading government and educational bodies.
                </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center text-center">
                    {affiliations.map((aff, index) => (
                        <div key={index} className="flex flex-col items-center space-y-3">
                            <div className="relative w-20 h-20">
                                <Image
                                    src={aff.logoUrl}
                                    alt={`${aff.name} Logo`}
                                    fill
                                    className="object-contain"
                                    data-ai-hint={aff.imageHint}
                                />
                            </div>
                            <p className="font-semibold text-center text-muted-foreground">{aff.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Student Life & Anti-Ragging */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Student Life</h3>
              <p className="text-muted-foreground">
                We believe in the holistic development of our students. Beyond academics, we encourage participation in a vibrant campus life featuring cultural events, theme weeks, ethnic day, annual day celebrations, and inter-college competitions to foster creativity and teamwork.
              </p>
            </Card>
            <Card className="p-6 bg-destructive/10 border-destructive/20">
              <div className="flex items-start space-x-4">
                  <ShieldAlert className="w-8 h-8 text-destructive mt-1"/>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-destructive mb-3">Anti-Ragging Policy</h3>
                    <p className="text-destructive/80">
                      Ragging in any form is strictly prohibited within and outside the campus. All students must adhere to the regulations set by the UGC, RGUHS, and Indian Nursing Council.
                    </p>
                     <Badge variant="destructive" className="mt-4">Zero Tolerance Policy</Badge>
                  </div>
              </div>
            </Card>
          </div>
        </section>

      </main>
    </div>
  );
}
