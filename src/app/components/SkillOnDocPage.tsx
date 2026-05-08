export function SkillOnDocPage() {
  return (
    <iframe
      src={`${import.meta.env.BASE_URL}pages/skill-on-doc.html`}
      title="Skill on Doc"
      style={{ width: '100%', height: 'calc(100vh - 57px)', border: 'none', display: 'block' }}
    />
  );
}
