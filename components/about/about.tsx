import BeforeAfter from "@/components/about/before-after";

export default function About() {
  return (
    <section className="flex flex-col sm:flex-row p-5 ">
      <section className="sm:p-5 w-full">
        <h2 className="text-2xl font-semibold text-green-400">About me</h2>
        <p className="my-3">Hey, I’m Piotrek.</p>
        <p className="my-3">The gym shaped my whole life. Without it I wouldn’t be who I am today.</p>
        <p className="my-3">When I was younger I was overweight and never felt respected by others. I didn’t know what I wanted to do, I always felt like the side character in every group, and I felt weak mentally and physically.</p>
        <p className="my-3">I started training at a young age and it completely changed the trajectory of my life. It built the confidence I hold today, the health I am so grateful for, and most importantly it helped me find my purpose. The gym doesn’t only build a healthy body. It builds discipline and confidence that carry over to every other part of life. I knew I wanted to help others find themselves through training.</p>
        <details>
          <summary className="cursor-pointer text-green-400 font-medium focus:outline-2">Read more</summary>
          <p className="my-3">So I went to college, then got my degree in Applied Sport and Exercise Science. My training methods are based on modern, evidence-based training.</p>
          <p className="my-3">During my time in education I hit a wall. I stopped progressing physically and my mental health rapidly declined. For years I battled gut issues that were diagnosed as IBS, alongside my eating disorder and my mental health. Nothing helped. After further tests, I was diagnosed with Crohn’s disease. For years I had been battling a chronic disease without knowing it.</p>
          <p className="my-3">I never gave up. With my treatment, evidence-based training and my knowledge of nutrition, I built the body and mind I have today.</p>
          <p className="my-3">I know how it feels to constantly fight with your own health. That’s why I became qualified to work with people with health conditions, disabilities and injuries, as well as the general population.</p>
          <p className="my-3">Now I coach online so I can guide more people. I still struggle with my health, but I’m in a place I never even imagined I could reach.</p>
        </details>
      </section>
      <BeforeAfter />
    </section>
  );
}
