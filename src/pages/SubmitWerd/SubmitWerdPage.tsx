import SubmitWordForm from "./SubmitWerdForm";

export default function SubmitWerdPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="font-heading text-4xl md:text-5xl mb-4 bg-chrome-horizontal bg-clip-text text-transparent">
          Submit a Word
        </h1>

        <p className="text-white/60 mb-12 font-body max-w-xl">
          Add a new entry to the archive. Every submission helps expand the
          vault.
        </p>

        <SubmitWordForm />
      </div>
    </main>
  );
}
