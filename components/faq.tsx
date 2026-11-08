export default function FAQ() {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-semibold text-green-400">Frequently asked questions</h2>
      <details className="marker:text-green-400 mt-3">
        <summary className="cursor-pointer hover:font-semibold focus:outline-2">How does online coaching work?</summary>
        <p className="mt-3">Everything runs through one app. Your workouts, nutrition targets, check-ins and messages are all in one place. You train, log it, and I review your progress every week.</p>
      </details>
      <details className="marker:text-green-400 mt-3">
        <summary className="cursor-pointer hover:font-semibold focus:outline-2">Is it for beginners?</summary>
        <p className="mt-3">Yes. If you feel lost in the gym, this is built for you. Every exercise comes with a video demo, and your plan matches where you are now.</p>
      </details>
      <details className="marker:text-green-400 mt-3">
        <summary className="cursor-pointer hover:font-semibold focus:outline-2">Do I need a gym?</summary>
        <p className="mt-3">A gym gives you the most options. If you train somewhere else, tell me on the call and we'll see if it works.</p>
      </details>
      <details className="marker:text-green-400 mt-3">
        <summary className="cursor-pointer hover:font-semibold focus:outline-2">How much time do I need?</summary>
        <p className="mt-3">Your plan is built around your week, not the other way round. We'll set the number of sessions on the call.</p>
      </details>
      <details className="marker:text-green-400 mt-3">
        <summary className="cursor-pointer hover:font-semibold focus:outline-2">Will I have to give up foods I like?</summary>
        <p className="mt-3">No. You get calorie and macro targets, not a list of banned foods. No extreme diets.</p>
      </details>
      <details className="marker:text-green-400 mt-3">
        <summary className="cursor-pointer hover:font-semibold focus:outline-2">Can I message you?</summary>
        <p className="mt-3">Yes. You can message me in the app as often as you need, and I'll reply as soon as I can.</p>
      </details>
      <details className="marker:text-green-400 mt-3">
        <summary className="cursor-pointer hover:font-semibold focus:outline-2">How long do I sign up for?</summary>
        <p className="mt-3">The minimum is 3 months. After that, it's month to month.</p>
      </details>
      <details className="marker:text-green-400 mt-3">
        <summary className="cursor-pointer hover:font-semibold focus:outline-2">How much does it cost?</summary>
        <p className="mt-3">We'll go through pricing on the free call, once we know what you need.</p>
      </details>
      <details className="marker:text-green-400 mt-3">
        <summary className="cursor-pointer hover:font-semibold focus:outline-2">What happens on the free call?</summary>
        <p className="mt-3">It's 20 minutes. We'll talk about where you're stuck and what you want. If I can help, I'll tell you how. If I can't, I'll tell you that too.</p>
      </details>
    </section>
  );
}
