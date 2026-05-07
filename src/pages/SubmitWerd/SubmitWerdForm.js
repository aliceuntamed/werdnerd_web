import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "../../utils/supabase/client";
import { fetchTags } from "../../utils/supabase/queries";
export default function SubmitWerdForm() {
    const [werd, setWerd] = useState("");
    const [definition, setDefinition] = useState("");
    const [pronunciation, setPronunciation] = useState("");
    const [partOfSpeech, setPartOfSpeech] = useState("");
    const [availableTags, setAvailableTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [status, setStatus] = useState("idle");
    useEffect(() => {
        fetchTags().then((tags) => setAvailableTags(tags ?? [])).catch(console.error);
    }, []);
    function toggleTag(tagId) {
        setSelectedTags((prev) => prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!werd.trim())
            return;
        setStatus("submitting");
        try {
            const { data: newWerd, error } = await supabase
                .from("werds")
                .insert({
                werd: werd.trim(),
                definition: definition.trim() || null,
                pronunciation: pronunciation.trim() || null,
                part_of_speech: partOfSpeech.trim() || null,
            })
                .select()
                .single();
            if (error)
                throw error;
            for (const tagId of selectedTags) {
                await supabase.from("werd_tags").insert({
                    werd_id: newWerd.werd_id,
                    tag_id: tagId,
                });
            }
            setWerd("");
            setDefinition("");
            setPronunciation("");
            setPartOfSpeech("");
            setSelectedTags([]);
            setStatus("success");
        }
        catch (err) {
            console.error(err);
            setStatus("error");
        }
    }
    const tagLabel = (t) => t.tag_name ?? t.name ?? "";
    return (<form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-white/70 text-sm mb-1">Word *</label>
        <input value={werd} onChange={(e) => setWerd(e.target.value)} required className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-white/40" placeholder="e.g. petrichor"/>
      </div>

      <div>
        <label className="block text-white/70 text-sm mb-1">Definition</label>
        <textarea value={definition} onChange={(e) => setDefinition(e.target.value)} rows={3} className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-white/40" placeholder="What does it mean?"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 text-sm mb-1">Pronunciation</label>
          <input value={pronunciation} onChange={(e) => setPronunciation(e.target.value)} className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-white/40" placeholder="e.g. pe-tri-ker"/>
        </div>
        <div>
          <label className="block text-white/70 text-sm mb-1">Part of Speech</label>
          <input value={partOfSpeech} onChange={(e) => setPartOfSpeech(e.target.value)} className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-white/40" placeholder="e.g. noun"/>
        </div>
      </div>

      {availableTags.length > 0 && (<div>
          <label className="block text-white/70 text-sm mb-2">Tags</label>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((t) => (<button key={t.tag_id} type="button" onClick={() => toggleTag(t.tag_id)} className={`px-3 py-1 rounded-full text-sm border transition ${selectedTags.includes(t.tag_id)
                    ? "bg-white/20 border-white/40 text-white"
                    : "bg-transparent border-white/20 text-white/50 hover:border-white/40 hover:text-white/80"}`}>
                {tagLabel(t)}
              </button>))}
          </div>
        </div>)}

      {status === "success" && (<p className="text-green-400 text-sm">Word submitted successfully!</p>)}
      {status === "error" && (<p className="text-red-400 text-sm">Something went wrong. Please try again.</p>)}

      <button type="submit" disabled={status === "submitting"} className="px-6 py-3 rounded-lg font-heading text-white border border-white/20 hover:bg-white/10 transition disabled:opacity-50">
        {status === "submitting" ? "Submitting…" : "Submit Word"}
      </button>
    </form>);
}
