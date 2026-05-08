export function SkillLibraryPage() {
  return (
    <iframe
      src={`${import.meta.env.BASE_URL}pages/skill-library.html`}
      title="Skill Library"
      style={{ width: '100%', height: 'calc(100vh - 57px)', border: 'none', display: 'block' }}
    />
  );
}
