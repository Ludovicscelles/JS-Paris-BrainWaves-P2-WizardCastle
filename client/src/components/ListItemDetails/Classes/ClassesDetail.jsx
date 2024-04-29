function classesDetail({ item }) {
  return (
    <section>
      <p>Hit die: {item.hit_die}</p>
      <p>Skills: {item.proficiency_choices[0].desc}</p>
    </section>
  );
}

export default classesDetail;
