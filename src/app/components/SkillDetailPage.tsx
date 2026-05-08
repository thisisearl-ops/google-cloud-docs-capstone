export function SkillDetailPage() {
  return (
    <iframe
      src={`${import.meta.env.BASE_URL}pages/skill-detail-screen.html`}
      title="Skill Detail"
      style={{ width: '100%', height: 'calc(100vh - 57px)', border: 'none', display: 'block' }}
    />
  );
}
