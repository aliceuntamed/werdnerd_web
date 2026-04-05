import { ChromeCubeStack } from "@/components/ui/ChromeCubeStack";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0d] text-white"
      data-uniq-id="f025bbeb-a469-4b27-8b01-78be49e318cd"
    >
      {/* Optional cinematic background */}
      {/* <ChromeSky className="absolute inset-0 -z-10 opacity-40" /> */}
      <Header data-uniq-id="227f38be-d60b-42e0-97ea-fdbeff04c4d7" />
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center pt-32 pb-20"
        data-uniq-id="e5a68d01-a6d0-442f-ab38-015a0f567cb4"
      >
        <ChromeCubeStack
          scale={1.6}
          className="mb-16"
          data-uniq-id="ebdc6ece-4f2c-4550-8128-20b5fb7200ca"
        />

        <h1
          className="font-heading text-4xl md:text-5xl tracking-tight text-center mb-6"
          data-uniq-id="4e4679c5-9e5b-4b87-950a-f8e15f381191"
        >
          About Stephanie
        </h1>

        <p
          className="font-body text-white/70 max-w-2xl text-center leading-relaxed px-6"
          data-uniq-id="b8607041-d4d4-4901-8542-41334149bad7"
        >
          I’m a creative technologist and designer who builds modular,
          chrome‑cinematic systems with expressive precision. I architect
          tactile artifacts, playful interfaces, and cohesive ecosystems that
          blend engineering clarity with aesthetic intention.
        </p>
      </section>
      {/* BODY CONTENT */}
      <section
        className="relative max-w-4xl mx-auto px-6 pb-32 space-y-16"
        data-uniq-id="2ecff6de-38f0-4701-b8be-99dd03060f14"
      >
        <div data-uniq-id="0b604ff6-7c2b-4bbc-af17-c42c7100449e">
          <h2
            className="font-heading text-2xl mb-4"
            data-uniq-id="085bdd73-1c02-46cc-8241-ab9c2cd775a8"
          >
            What I Build
          </h2>
          <p
            className="font-body text-white/70 leading-relaxed"
            data-uniq-id="0b843cd0-1886-435f-a0e1-e78ddd8e5e06"
          >
            I design and engineer modular UI systems, chrome‑accented
            components, expressive game mechanics, and cohesive visual
            languages. My work blends precision, play, and cinematic motion.
          </p>
        </div>

        <div data-uniq-id="73472424-db46-463f-99ee-6b3dbe8bdf86">
          <h2
            className="font-heading text-2xl mb-4"
            data-uniq-id="416a87b6-2ba2-4ce0-b8e5-2f9ba1d83f06"
          >
            How I Think
          </h2>
          <p
            className="font-body text-white/70 leading-relaxed"
            data-uniq-id="457c4d18-1f45-4006-ba0d-6597f9dbcb49"
          >
            I approach every project as a system — a constellation of
            interconnected parts that must feel intentional, tactile, and
            unified. I value clarity, polish, and expressive cohesion.
          </p>
        </div>

        <div data-uniq-id="f0a16533-29a9-404a-a989-8fcfeac9bd63">
          <h2
            className="font-heading text-2xl mb-4"
            data-uniq-id="d156f4fb-0425-4fce-a248-ec96eaf4437d"
          >
            What Drives Me
          </h2>
          <p
            className="font-body text-white/70 leading-relaxed"
            data-uniq-id="b133626b-6145-403a-a1ef-5a49b978f129"
          >
            I’m energized by building experiences that feel alive — from
            chrome‑lit artifacts to playful puzzles to cinematic interfaces.
            Every detail matters, and every interaction should feel crafted.
          </p>
        </div>
      </section>
      <Footer data-uniq-id="f8a533f3-efe6-4a21-964b-0c759c8d207c" />
    </div>
  );
}
