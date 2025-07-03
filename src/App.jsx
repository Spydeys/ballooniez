import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const guides = [
  {
    name: "Jules",
    vibe: "calm, spiritual",
    quote: "It's okay to start small.",
    bio: "Former yoga teacher turned life guide. I help people feel grounded during transitions.",
    topics: ["loneliness", "identity", "purpose"],
  },
  {
    name: "Maya",
    vibe: "funny, creative",
    quote: "Laugh through it, then grow through it.",
    bio: "Ex-standup comic now helping creatives through burnout and breakups.",
    topics: ["burnout", "breakups", "self-expression"],
  },
  {
    name: "Rafi",
    vibe: "direct, deep",
    quote: "Clarity lives on the other side of discomfort.",
    bio: "I guide people ready to face the truth and move forward.",
    topics: ["overthinking", "career pivots", "grief"],
  },
];

export default function NextYouApp() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    vibe: "",
    topics: "",
    music: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const matchedGuides = guides.filter((g) =>
    g.vibe.includes(form.vibe.toLowerCase()) ||
    g.topics.some((t) => form.topics.toLowerCase().includes(t))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-indigo-100 p-6 flex flex-col items-center justify-center">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          {step === 0 && (
            <div>
              <h2 className="text-xl font-semibold">Hi there 👋</h2>
              <p className="text-sm text-muted-foreground">
                Let’s match you with someone who gets you.
              </p>
              <Button className="mt-4 w-full" onClick={next}>Get Started</Button>
            </div>
          )}

          {step === 1 && (
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <Input name="name" value={form.name} onChange={handleChange} placeholder="Alex" className="mt-2" />
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Back</Button>
                <Button onClick={next}>Next</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block text-sm font-medium">What kind of vibe are you looking for?</label>
              <Input name="vibe" value={form.vibe} onChange={handleChange} placeholder="calm, creative, funny..." className="mt-2" />
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Back</Button>
                <Button onClick={next}>Next</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block text-sm font-medium">What’s on your mind lately?</label>
              <Textarea name="topics" value={form.topics} onChange={handleChange} placeholder="Breakup, burnout, loneliness..." className="mt-2" />
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Back</Button>
                <Button onClick={next}>Next</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="block text-sm font-medium">Any music that feels like you right now?</label>
              <Input name="music" value={form.music} onChange={handleChange} placeholder="A song, genre, or vibe" className="mt-2" />
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prev}>Back</Button>
                <Button onClick={next}>Next</Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-xl font-semibold text-center mb-2">
                Here are your matches, {form.name || "friend"}:
              </h2>
              <div className="space-y-4">
                {matchedGuides.length ? matchedGuides.map((g, i) => (
                  <Card key={i} className="bg-white shadow p-4 rounded-xl">
                    <h3 className="text-lg font-medium">{g.name}</h3>
                    <p className="text-sm italic text-muted-foreground mb-1">"{g.quote}"</p>
                    <p className="text-sm text-muted-foreground mb-2">{g.bio}</p>
                    <Button variant="secondary">Book a Chat</Button>
                  </Card>
                )) : (
                  <p className="text-sm text-muted-foreground text-center">No exact match found, but we're expanding your circle.</p>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}