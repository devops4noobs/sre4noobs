"use client";
import { useForm } from 'react-hook-form';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { motion } from "framer-motion";

interface PostmortemFormData {
  issueSummary: string;
  issueStartDateTime: string;
  issueResolutionDateTime: string;
  issueImpact: string;
  issueDetails: string;
  preliminaryDirectCause: string;
  mitigationSteps: string;
  processImprovements: string;
  timeline: string;
}

export default function PostmortemForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<PostmortemFormData>({
    defaultValues: {
      issueSummary: '',
      issueStartDateTime: '',
      issueResolutionDateTime: '',
      timeline: '',
    },
  });
  const [blamelessWarning, setBlamelessWarning] = useState('');

  const onSubmit = (data: PostmortemFormData) => {
    const blameWords = ['fault', 'blame', 'mistake', 'error by'];
    const fields = [
      data.issueSummary, data.issueImpact, data.issueDetails, data.preliminaryDirectCause,
      data.mitigationSteps, data.processImprovements, data.timeline, 
    ];
    const hasBlame = fields.some(field => 
      blameWords.some(word => field?.toLowerCase().includes(word))
    );
    if (hasBlame) {
      setBlamelessWarning('Avoid blame words like "fault" or "mistake". Use systemic terms like "system issue".');
      return;
    }
    setBlamelessWarning('');

    const markdown = `
# Blameless Postmortem Report

## Issue Start Date/Time (UTC)
${data.issueStartDateTime}

## Issue Resolution Date/Time (UTC)
${data.issueResolutionDateTime}

## Issue Summary
${data.issueSummary}


## Issue Impact
${data.issueImpact}

## Issue Details
${data.issueDetails}

## Preliminary Direct Cause
${data.preliminaryDirectCause}

## Mitigation Steps
${data.mitigationSteps}

## Process Improvements
${data.processImprovements}

## Timeline
${data.timeline}
    `.trim();

    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'postmortem-report.md');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: "15%", left: "25%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "40%", left: "75%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "70%", left: "35%" }}></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-12 shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500 text-center"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl">
              Blameless Postmortem Generator
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Create Structured Reports Easily
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Document incidents without blame for continuous improvement
          </motion.p>
        </motion.section>

        {/* Form Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-white">
            {blamelessWarning && (
              <div className="p-4 bg-yellow-900 text-yellow-200 rounded flex items-center">
                {blamelessWarning}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="summary" className="block text-sm font-medium mb-1">
                  Summary <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="summary"
                  aria-describedby="summary-error"
                  {...register('issueSummary', { required: 'Summary is required' })}
                  className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                  rows={4}
                  placeholder="Edit the predefined template below to describe the incident."
                />
                {errors.issueSummary && (
                  <p id="summary-error" className="mt-1 text-sm text-red-400">{errors.issueSummary.message}</p>
                )}
              </div>
                 
              <div>
                <label htmlFor="issueStartDateTime" className="block text-sm font-medium mb-1">
                  Start Date/Time (UTC) <span className="text-purple-400">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="issueStartDateTime"
                  {...register('issueStartDateTime', { required: 'Start Date/Time is required' })}
                  className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                />
                {errors.issueStartDateTime && (
                  <p id="issueStartDateTime-error" className="mt-1 text-sm text-red-400">{errors.issueStartDateTime.message}</p>
                )}
                <label htmlFor="issueResolutionDateTime" className="block text-sm font-medium mb-1 mt-4">
                  End Date/Time (UTC) <span className="text-purple-400">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="issueResolutionDateTime"
                  {...register('issueResolutionDateTime', { required: 'End Date/Time is required' })}
                  className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                />
                {errors.issueResolutionDateTime && (
                  <p id="issueResolutionDateTime-error" className="mt-1 text-sm text-red-400">{errors.issueResolutionDateTime.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="issueImpact" className="block text-sm font-medium mb-1">
                  Impact <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="issueImpact"
                  aria-describedby="issueImpact-error"
                  {...register('issueImpact', { required: 'Impact is required' })}
                  className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                  rows={4}
                  placeholder="Quantify the impact (e.g., 10% users affected, service downtime)."
                />
                {errors.issueImpact && (
                  <p id="issueImpact-error" className="mt-1 text-sm text-red-400">{errors.issueImpact.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="issueDetails" className="block text-sm font-medium mb-1">
                  Details <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="issueDetails"
                  aria-describedby="issueDetails-error"
                  {...register('issueDetails', { required: 'Details is required' })}
                  className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                  rows={4}
                  placeholder="Additional context or observations about the incident."
                />
                {errors.issueDetails && (
                  <p id="issueDetails-error" className="mt-1 text-sm text-red-400">{errors.issueDetails.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="preliminaryDirectCause" className="block text-sm font-medium mb-1">
                  Direct Cause <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="preliminaryDirectCause"
                  aria-describedby="preliminaryDirectCause-error"
                  {...register('preliminaryDirectCause', { required: 'Direct Cause is required' })}
                  className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                  rows={4}
                  placeholder="Initial identified cause (e.g., server overload)."
                />
                {errors.preliminaryDirectCause && (
                  <p id="preliminaryDirectCause-error" className="mt-1 text-sm text-red-400">{errors.preliminaryDirectCause.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="mitigationSteps" className="block text-sm font-medium mb-1">
                  Mitigation Steps <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="mitigationSteps"
                  aria-describedby="mitigationSteps-error"
                  {...register('mitigationSteps', { required: 'Mitigation Steps are required' })}
                  className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                  rows={4}
                  placeholder="Actions taken to resolve the incident (e.g., restart service)."
                />
                {errors.mitigationSteps && (
                  <p id="mitigationSteps-error" className="mt-1 text-sm text-red-400">{errors.mitigationSteps.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="processImprovements" className="block text-sm font-medium mb-1">
                  Improvements <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="processImprovements"
                  aria-describedby="processImprovements-error"
                  {...register('processImprovements', { required: 'Improvements are required' })}
                  className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                  rows={4}
                  placeholder="Suggested changes to prevent recurrence (e.g., enhance monitoring)."
                />
                {errors.processImprovements && (
                  <p id="processImprovements-error" className="mt-1 text-sm text-red-400">{errors.processImprovements.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium mb-1">
                  Timeline <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="timeline"
                  aria-describedby="timeline-error"
                  {...register('timeline', { required: 'Timeline is required' })}
                  className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
                  rows={4}
                  placeholder="List key events (e.g., 09:00 - Alert triggered, 09:15 - Team paged)."
                />
                {errors.timeline && (
                  <p id="timeline-error" className="mt-1 text-sm text-red-400">{errors.timeline.message}</p>
                )}
              </div>

            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-6"
            >
              Download Postmortem Report
            </button>
          </form>
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-8 text-center">
          Last updated: July 27, 2025, 6:20 PM EEST
        </p>
      </main>
    </div>
  );
}