import Reveal from './Reveal';

const rows = [
  { feature: 'Horas mensuales', start: '4h', growth: '10h', scale: '20h' },
  { feature: 'Auditoría técnica', start: '✓ Básica', growth: '✓ Completa', scale: '✓ Continua', startCheck: true, growthCheck: true, scaleCheck: true },
  { feature: 'Auditoría UX', start: '—', growth: '✓', scale: '✓', startCross: true, growthCheck: true, scaleCheck: true },
  { feature: 'Consultoría estratégica', start: '—', growth: 'Mensual', scale: 'Bisemanal', startCross: true },
  { feature: 'Plan de mejoras priorizado', start: '✓', growth: '✓', scale: '✓', startCheck: true, growthCheck: true, scaleCheck: true },
  { feature: 'Tests A/B', start: '—', growth: '✓', scale: '✓', startCross: true, growthCheck: true, scaleCheck: true },
  { feature: 'Personalización de contenido', start: '—', growth: '—', scale: '✓', startCross: true, growthCross: true, scaleCheck: true },
  { feature: 'Reporting', start: 'Básico', growth: 'Avanzado', scale: 'Avanzado + Dashboard' },
  { feature: 'Reuniones de seguimiento', start: '—', growth: 'Mensual', scale: 'Bisemanal', startCross: true },
  { feature: 'Account manager dedicado', start: '—', growth: '—', scale: '✓', startCross: true, growthCross: true, scaleCheck: true },
  { feature: 'Soporte de emergencias', start: '—', growth: '—', scale: '✓', startCross: true, growthCross: true, scaleCheck: true },
  { feature: 'Horas acumulables', start: '—', growth: '✓ 1 mes', scale: '✓ 2 meses', startCross: true, growthCheck: true, scaleCheck: true },
];

function Cell({ value, isCheck, isCross }) {
  if (isCross) return <td><span className="cross">—</span></td>;
  if (isCheck) return <td><span className="check">{value}</span></td>;
  return <td>{value}</td>;
}

export default function Comparison() {
  return (
    <section id="comparativa">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">Comparativa</span>
            <h2 className="section-title">Compara los planes en detalle</h2>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="comparison-wrapper">
            <table className="comparison-table glass-table">
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Start</th>
                  <th>Growth</th>
                  <th>Scale</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.feature}</td>
                    <Cell value={r.start} isCheck={r.startCheck} isCross={r.startCross} />
                    <Cell value={r.growth} isCheck={r.growthCheck} isCross={r.growthCross} />
                    <Cell value={r.scale} isCheck={r.scaleCheck} isCross={r.scaleCross} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
