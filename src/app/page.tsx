"use client";

import React, { useState } from "react";
import InteractiveBackground from "@/components/InteractiveBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Modals
import EducationModal from "@/components/EducationModal";
import ResumeModal from "@/components/ResumeModal";
import HireMeModal from "@/components/HireMeModal";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import BlogModal from "@/components/BlogModal";

import { Project, BlogPost } from "@/data/portfolioData";

export default function HomePage() {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  return (
    <div className="relative min-h-screen bg-[#06090e] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Full-Page Interactive Canvas Animation */}
      <InteractiveBackground />

      {/* Main Content Flow */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Navigation Bar */}
        <Navbar
          onOpenEducation={() => setIsEducationOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenHireMe={() => setIsHireMeOpen(true)}
        />

        <main className="grow">
          {/* Hero Section */}
          <HeroSection
            onOpenHireMe={() => setIsHireMeOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* About Me Section */}
          <AboutSection
            onOpenEducation={() => setIsEducationOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Skills Section with required tabs */}
          <SkillsSection />

          {/* Projects Section */}
          <ProjectsSection
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* Production Web Architecture Blueprint */}
          <ArchitectureSection />

          {/* Blog Section */}
          <BlogSection
            onSelectPost={(post) => setSelectedBlogPost(post)}
          />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Modals */}
      <EducationModal
        isOpen={isEducationOpen}
        onClose={() => setIsEducationOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BlogModal
        post={selectedBlogPost}
        isOpen={!!selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
      />
    </div>
  );
}