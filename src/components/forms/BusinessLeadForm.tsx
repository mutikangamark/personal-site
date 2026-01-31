"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  Briefcase,
  Target,
  Calendar,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  // Step 1: Contact Information
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredContact: z.enum(["email", "call"]),

  // Step 2: Business Information
  businessName: z.string().min(2, "Business name is required"),
  industry: z.string().min(1, "Please select your industry"),
  businessStage: z.enum(["idea", "startup", "growth", "established"]),
  employeeCount: z.enum(["solo", "2-10", "11-50", "51-200", "200+"]),
  websiteStatus: z.enum(["none", "basic", "outdated", "professional"]),

  // Step 3: Project Details
  primaryNeed: z.enum([
    "website",
    "mobile-app",
    "mobile-money",
    "saas-platform",
    "e-commerce",
    "custom-software",
    "other",
  ]),
  currentSystems: z.string().optional(),
  budget: z.enum(["under-1m", "1m-5m", "5m-15m", "15m-50m", "50m+"]),
  timeline: z.enum(["asap", "1-month", "3-months", "6-months", "flexible"]),
  goals: z.string().min(10, "Please describe your goals in more detail"),
  howFound: z.enum([
    "google",
    "social-media",
    "referral",
    "linkedin",
    "other",
  ]),
});

type FormData = z.infer<typeof formSchema>;

const industries = [
  { value: "agriculture", label: "Agriculture & Farming" },
  { value: "retail", label: "Retail & Trade" },
  { value: "finance", label: "Finance & Banking" },
  { value: "healthcare", label: "Healthcare & Pharmacy" },
  { value: "education", label: "Education & Training" },
  { value: "hospitality", label: "Hospitality & Tourism" },
  { value: "transport", label: "Transport & Logistics" },
  { value: "real-estate", label: "Real Estate & Construction" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "technology", label: "Technology & IT" },
  { value: "media", label: "Media & Entertainment" },
  { value: "ngo", label: "NGO & Non-Profit" },
  { value: "other", label: "Other" },
];

const steps = [
  { id: 1, title: "Contact Info", icon: User },
  { id: 2, title: "Business Details", icon: Building2 },
  { id: 3, title: "Project Needs", icon: Target },
];

export function BusinessLeadForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      preferredContact: "email",
      businessName: "",
      industry: "",
      businessStage: "startup",
      employeeCount: "2-10",
      websiteStatus: "none",
      primaryNeed: "website",
      currentSystems: "",
      budget: "1m-5m",
      timeline: "1-month",
      goals: "",
      howFound: "google",
    },
    mode: "onChange",
  });

  const { register, handleSubmit, formState, setValue, watch, trigger } = form;
  const { errors } = formState;

  const validateStep = async (step: number) => {
    let fieldsToValidate: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["fullName", "email", "phone", "preferredContact"];
        break;
      case 2:
        fieldsToValidate = [
          "businessName",
          "industry",
          "businessStage",
          "employeeCount",
          "websiteStatus",
        ];
        break;
      case 3:
        fieldsToValidate = [
          "primaryNeed",
          "budget",
          "timeline",
          "goals",
          "howFound",
        ];
        break;
    }

    const result = await trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description:
          "Thank you for reaching out. We'll contact you within 24 hours.",
        variant: "success",
      });
    } catch {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold mb-3">Thank You, {watch("fullName")}!</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Your application has been received. We've sent a confirmation to{" "}
          <span className="font-medium text-foreground">{watch("email")}</span>.
          <br />
          <br />
          Expect to hear from us within <strong>24 hours</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" asChild>
            <a href="mailto:mutikanga.mark@mmrug.com">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
          <Button onClick={() => setIsSubmitted(false)}>
            Submit Another Inquiry
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress Steps */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                currentStep >= step.id
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-muted-foreground/30 text-muted-foreground"
              }`}
            >
              {currentStep > step.id ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <step.icon className="h-5 w-5" />
              )}
            </div>
            <span
              className={`ml-2 text-sm font-medium hidden sm:block ${
                currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`w-12 sm:w-24 h-0.5 mx-2 sm:mx-4 ${
                  currentStep > step.id ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Contact Information */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Contact Information</h3>
                      <p className="text-sm text-muted-foreground">
                        How can we reach you?
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="fullName"
                          placeholder="John Doe"
                          className="pl-10"
                          {...register("fullName")}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-sm text-destructive">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            className="pl-10"
                            {...register("email")}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-sm text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            placeholder="+256 700 000 000"
                            className="pl-10"
                            {...register("phone")}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-sm text-destructive">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Contact Method *</Label>
                      <Select
                        value={watch("preferredContact")}
                        onValueChange={(value: string) =>
                          setValue("preferredContact", value as "email" | "call")
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email (Recommended)</SelectItem>
                          <SelectItem value="call">Phone Call</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Tell us about your business
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="businessName"
                          placeholder="Your Company Ltd"
                          className="pl-10"
                          {...register("businessName")}
                        />
                      </div>
                      {errors.businessName && (
                        <p className="text-sm text-destructive">
                          {errors.businessName.message}
                        </p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Industry *</Label>
                        <Select
                          value={watch("industry")}
                          onValueChange={(value: string) => setValue("industry", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry.value} value={industry.value}>
                                {industry.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.industry && (
                          <p className="text-sm text-destructive">
                            {errors.industry.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>Business Stage *</Label>
                        <Select
                          value={watch("businessStage")}
                          onValueChange={(value: string) =>
                            setValue("businessStage", value as "idea" | "startup" | "growth" | "established")
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select stage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="idea">Just an Idea</SelectItem>
                            <SelectItem value="startup">Startup (0-2 years)</SelectItem>
                            <SelectItem value="growth">Growth (2-5 years)</SelectItem>
                            <SelectItem value="established">Established (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Team Size *</Label>
                        <Select
                          value={watch("employeeCount")}
                          onValueChange={(value: string) =>
                            setValue("employeeCount", value as "solo" | "2-10" | "11-50" | "51-200" | "200+")
                          }
                        >
                          <SelectTrigger>
                            <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="solo">Just Me</SelectItem>
                            <SelectItem value="2-10">2-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="200+">200+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Current Website *</Label>
                        <Select
                          value={watch("websiteStatus")}
                          onValueChange={(value: string) =>
                            setValue("websiteStatus", value as "none" | "basic" | "outdated" | "professional")
                          }
                        >
                          <SelectTrigger>
                            <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Website status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No website yet</SelectItem>
                            <SelectItem value="basic">Basic website</SelectItem>
                            <SelectItem value="outdated">Outdated, needs refresh</SelectItem>
                            <SelectItem value="professional">Professional, working well</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Project Details */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Project Details</h3>
                      <p className="text-sm text-muted-foreground">
                        What are you looking to build?
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label>Primary Need *</Label>
                      <Select
                        value={watch("primaryNeed")}
                        onValueChange={(value: string) =>
                          setValue(
                            "primaryNeed",
                            value as
                              | "website"
                              | "mobile-app"
                              | "mobile-money"
                              | "saas-platform"
                              | "e-commerce"
                              | "custom-software"
                              | "other"
                          )
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="What do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Professional Website</SelectItem>
                          <SelectItem value="mobile-app">Mobile Application</SelectItem>
                          <SelectItem value="mobile-money">Mobile Money Integration</SelectItem>
                          <SelectItem value="saas-platform">SaaS Platform</SelectItem>
                          <SelectItem value="e-commerce">E-Commerce Store</SelectItem>
                          <SelectItem value="custom-software">Custom Software</SelectItem>
                          <SelectItem value="other">Other / Multiple</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Budget Range (UGX) *</Label>
                        <Select
                          value={watch("budget")}
                          onValueChange={(value: string) =>
                            setValue("budget", value as "under-1m" | "1m-5m" | "5m-15m" | "15m-50m" | "50m+")
                          }
                        >
                          <SelectTrigger>
                            <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1m">Under 1M UGX</SelectItem>
                            <SelectItem value="1m-5m">1M - 5M UGX</SelectItem>
                            <SelectItem value="5m-15m">5M - 15M UGX</SelectItem>
                            <SelectItem value="15m-50m">15M - 50M UGX</SelectItem>
                            <SelectItem value="50m+">50M+ UGX</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Timeline *</Label>
                        <Select
                          value={watch("timeline")}
                          onValueChange={(value: string) =>
                            setValue(
                              "timeline",
                              value as "asap" | "1-month" | "3-months" | "6-months" | "flexible"
                            )
                          }
                        >
                          <SelectTrigger>
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="When do you need it?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As soon as possible</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="3-months">Within 3 months</SelectItem>
                            <SelectItem value="6-months">Within 6 months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentSystems">
                        Current Tools/Systems (Optional)
                      </Label>
                      <Input
                        id="currentSystems"
                        placeholder="e.g., Excel, Email, QuickBooks..."
                        {...register("currentSystems")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals">
                        Goals & Specific Requirements *
                      </Label>
                      <Textarea
                        id="goals"
                        placeholder="Describe what you want to achieve with this project. What problems are you trying to solve? What features are most important to you?"
                        rows={4}
                        {...register("goals")}
                      />
                      {errors.goals && (
                        <p className="text-sm text-destructive">
                          {errors.goals.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>How did you find us? *</Label>
                      <Select
                        value={watch("howFound")}
                        onValueChange={(value: string) =>
                          setValue(
                            "howFound",
                            value as "google" | "social-media" | "referral" | "linkedin" | "other"
                          )
                        }
                      >
                        <SelectTrigger>
                          <Sparkles className="mr-2 h-4 w-4 text-muted-foreground" />
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="referral">Friend/Colleague Referral</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {currentStep < 3 ? (
            <Button type="button" onClick={nextStep}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <CheckCircle2 className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
