<template>
  <div class="bg-gray-50 text-gray-900">
    <!-- HERO -->
    <section class="bg-gradient-to-b from-black to-pristine-purple text-white">
      <div class="max-w-7xl mx-auto px-6 pt-12 pb-16 lg:pb-20">
        <div class="flex items-baseline space-x-2">
          <span class="bg-white text-black font-extrabold tracking-widest px-2 py-1 text-2xl leading-none uppercase">Pristine</span>
          <span class="text-white font-extrabold tracking-widest py-1 text-2xl leading-none uppercase">Can</span>
        </div>
        <h1 class="mt-6 text-4xl md:text-5xl font-extrabold">Services</h1>
        <p class="mt-4 text-gray-300 max-w-2xl">
          Simple plans, curbside convenience, and a cleaner, odor‑free bin—every time.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#plans" class="inline-flex justify-center rounded-xl bg-pristine-light-blue px-6 py-3 font-semibold hover:bg-pristine-dark-blue">View Plans</a>
          <a href="#compare" class="inline-flex justify-center rounded-xl px-6 py-3 font-semibold ring-1 ring-white/25 hover:bg-white/10">Compare</a>
        </div>
      </div>
    </section>

    <!-- SERVICE PLANS -->
    <section id="plans" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center">Choose Your Plan</h2>
        <p class="text-center text-gray-600 mt-2">Transparent pricing. No contracts.</p>

        <div class="mt-10 grid lg:grid-cols-3 gap-8">
          <!-- One-Time -->
          <article class="rounded-2xl ring-1 ring-gray-200 bg-white p-8 shadow-sm">
            <header>
              <h3 class="font-bold text-xl">One‑Time Clean</h3>
              <p class="text-gray-600">Deep clean when you need it</p>
            </header>
            <div class="mt-4">
              <div class="text-4xl font-extrabold">$35</div>
              <div class="text-gray-600">first can</div>
              <div class="text-gray-600">+ $15 each additional</div>
            </div>
            <ul class="mt-6 space-y-3 text-sm text-gray-700">
              <li class="flex items-start gap-3"><CheckIcon/> Kills <span class="font-semibold">99.9%</span> of germs</li>
              <li class="flex items-start gap-3"><CheckIcon/> Deodorized and spotless</li>
              <li class="flex items-start gap-3"><CheckIcon/> Curbside service—no hassle</li>
            </ul>
            <button @click="openForm" class="mt-8 inline-flex w-full justify-center rounded-xl bg-pristine-purple text-white px-6 py-3 font-semibold hover:bg-gray-800">Book One‑Time</button>
          </article>

          <!-- Monthly (featured) -->
          <article class="relative rounded-2xl bg-pristine-dark-blue text-white p-8 shadow-lg ring-4 ring-pristine-light-blue/20">
            <div class="absolute -top-3 right-6">
              <span class="text-xs tracking-wide uppercase bg-white border-t border-pristine-dark-blue shadow shadow-pristine-dark-blue text-pristine-purple px-2 py-1 rounded-md font-bold">Most Popular</span>
            </div>
            <header>
              <h3 class="font-bold text-xl">Monthly Plan</h3>
              <p class="text-white/80">Best for busy households</p>
            </header>
            <div class="mt-4">
              <div class="text-4xl font-extrabold">$25</div>
              <div class="opacity-80">per visit • first can</div>
              <div class="opacity-80">+ $10 each additional</div>
            </div>
            <ul class="mt-6 space-y-3 text-sm text-white/90">
              <li class="flex items-start gap-3"><CheckIcon class="text-white"/> Priority scheduling</li>
              <li class="flex items-start gap-3"><CheckIcon class="text-white"/> Ongoing odor control</li>
              <li class="flex items-start gap-3"><CheckIcon class="text-white"/> Auto‑reminders before visit</li>
            </ul>
            <button @click="openForm" class="mt-8 inline-flex w-full justify-center rounded-xl bg-white text-pristine-purple px-6 py-3 font-semibold hover:bg-gray-100">Start Monthly</button>
          </article>

          <!-- Quarterly -->
          <article class="rounded-2xl ring-1 ring-gray-200 bg-white p-8 shadow-sm">
            <header>
              <h3 class="font-bold text-xl">Quarterly Plan</h3>
              <p class="text-gray-600">Seasonal refresh</p>
            </header>
            <div class="mt-4">
              <div class="text-4xl font-extrabold">$30</div>
              <div class="text-gray-600">per visit • first can</div>
              <div class="text-gray-600">+ $12 each additional</div>
            </div>
            <ul class="mt-6 space-y-3 text-sm text-gray-700">
              <li class="flex items-start gap-3"><CheckIcon/> Sanitized + deodorized</li>
              <li class="flex items-start gap-3"><CheckIcon/> Ideal for lower trash volumes</li>
              <li class="flex items-start gap-3"><CheckIcon/> Flexible scheduling</li>
            </ul>
            <button @click="openForm" class="mt-8 inline-flex w-full justify-center rounded-xl bg-pristine-purple text-white px-6 py-3 font-semibold hover:bg-gray-800">Choose Quarterly</button>
          </article>
        </div>

        <!-- Trust Strip -->
        <div class="mt-12 grid sm:grid-cols-3 gap-6 text-center">
          <div class="rounded-xl bg-gray-50 p-5 ring-1 ring-gray-200">✅ Fully Sanitized</div>
          <div class="rounded-xl bg-gray-50 p-5 ring-1 ring-gray-200">✅ Odor‑Free Guarantee</div>
          <div class="rounded-xl bg-gray-50 p-5 ring-1 ring-gray-200">✅ Curbside Convenience</div>
        </div>
      </div>
    </section>

    <!-- COMPARISON TABLE -->
    <section id="compare" class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center">Plan Comparison</h2>
        <div class="mt-10 overflow-x-auto">
          <table class="w-full text-left bg-white rounded-2xl overflow-hidden shadow">
            <thead class="bg-gray-50 text-pristine-dark-blue">
              <tr class="divide-x divide-gray-200">
                <th class="p-4">Feature</th>
                <th class="p-4">One‑Time</th>
                <th class="p-4">Monthly</th>
                <th class="p-4">Quarterly</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-gray-700">
              <tr class="divide-x divide-gray-100">
                <td class="p-4 font-medium">High‑temp wash & eco sanitizer</td>
                <td class="p-4">Included</td>
                <td class="p-4">Included</td>
                <td class="p-4">Included</td>
              </tr>
              <tr class="divide-x divide-gray-100">
                <td class="p-4 font-medium">Deodorize & dry</td>
                <td class="p-4">Included</td>
                <td class="p-4">Included</td>
                <td class="p-4">Included</td>
              </tr>
              <tr class="divide-x divide-gray-100">
                <td class="p-4 font-medium">Reminder notifications</td>
                <td class="p-4">—</td>
                <td class="p-4"><span class="text-pristine-light-blue">✔︎</span></td>
                <td class="p-4"><span class="text-pristine-light-blue">✔︎</span></td>
              </tr>
              <tr class="divide-x divide-gray-100">
                <td class="p-4 font-medium">Ongoing odor control</td>
                <td class="p-4">—</td>
                <td class="p-4"><span class="text-pristine-light-blue">✔︎</span> Best</td>
                <td class="p-4"><span class="text-pristine-light-blue">✔︎</span> Good</td>
              </tr>
              <tr class="divide-x divide-gray-100">
                <td class="p-4 font-medium">Priority scheduling</td>
                <td class="p-4">—</td>
                <td class="p-4"><span class="text-pristine-light-blue">✔︎</span></td>
                <td class="p-4">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS (short) -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center">How It Works</h2>
        <div class="mt-10 grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-2xl ring-1 ring-gray-200">
            <div class="text-sm font-semibold text-pristine-light-blue">Step 1</div>
            <h3 class="mt-1 text-xl font-bold">Book Online</h3>
            <p class="mt-2 text-gray-600">Tell us how many cans. We’ll confirm your date and send reminders.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-2xl ring-1 ring-gray-200">
            <div class="text-sm font-semibold text-pristine-light-blue">Step 2</div>
            <h3 class="mt-1 text-xl font-bold">Curbside Clean</h3>
            <p class="mt-2 text-gray-600">High‑temp wash + eco sanitizer. Rinse, deodorize, dry.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-2xl ring-1 ring-gray-200">
            <div class="text-sm font-semibold text-pristine-light-blue">Step 3</div>
            <h3 class="mt-1 text-xl font-bold">Smell‑Good Finish</h3>
            <p class="mt-2 text-gray-600">Spotless and odor‑free. Pay online—no contracts.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gray-50 text-gray-700">
      <div class="max-w-7xl mx-auto px-6 py-16 lg:py-20 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold">Wanting fresh, odor‑free cans?</h2>
        <p class="mt-3 text-pristine-dark-blue">Book once or set it and forget it with a plan.</p>
        <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button @click="openForm" class="inline-flex justify-center rounded-xl bg-pristine-purple text-white px-6 py-3 font-semibold hover:bg-pristine-dark-blue">Get Started</button>
          <a href="#compare" class="inline-flex justify-center rounded-xl px-6 py-3 font-semibold ring-1 ring-gray-500/25 hover:bg-gray-500/20">Compare Plans</a>
        </div>
      </div>
    </section>

    <!-- Modal Overlay (shared with Home) -->
    <transition name="fade">
      <div v-if="showForm" class="fixed inset-0 bg-pristine-purple/60 flex items-center justify-center z-50">
        <div class="bg-white rounded-xl py-8 w-[95%] max-w-3xl relative shadow-2xl">
          <button @click="showForm = false" class="absolute top-1 right-2 text-pristine-light-blue hover:text-pristine-purple text-3xl font-bold" aria-label="Close">×</button>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdrV6doNvYp-sJuj2qqxOnCr7IIAIBnBCMTSY1aG2L92H_E9g/viewform?embedded=true"
            class="w-full flex"
            style="min-height: 80vh;"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  components: {
    CheckIcon: {
      name: 'CheckIcon',
      props: { class: { type: String, default: '' } },
      template: `
        <svg :class="'w-5 h-5 text-pristine-light-blue mt-0.5 ' + class" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      `,
    },
  },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    openForm() {
      this.showForm = true;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>
