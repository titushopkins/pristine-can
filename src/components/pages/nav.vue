<template>
	<div class="w-full mx-auto bg-black to-transparent py-14 overflow-x-clip">

        <div :class="showMenu ? 'fixed w-full h-full inset-0 bg-white/25 z-50 opacity-100' : 'opacity-0'" class="transition-all duration-300 ease-in-out" />

        <div
			class="select-none top-0 w-full sm:max-w-[600px] transition-all transform-gpu duration-500 transform-gpu bg-gradient-to-r from-pristine-light-blue to-pristine-dark-blue shadow-lg h-full absolute right-0 z-[60] absolute"
			:class="showMenu ? '' : 'opacity-0 translate-x-full'"
			@click.stop
		>
			<div
				class="select-none delay-500 w-full sm:max-w-xl transition-all transform-gpu duration-500 transform-gpu bg-black shadow-lg h-full absolute right-0 z-[60] "
				:class="showMenu ? '' : 'opacity-0 translate-x-full'"
				@click.stop
			>
			  <div class="bg-black h-full w-full max-w-md">
			    <button class="absolute top-0 right-0 cursor-pointer m-4 text-white text-3xl p-8" @click="showMenu = false">
			    	×
			    </button>

			    <div class="flex flex-col text-xl space-y-6 p-12 text-white" @click="showMenu = false">
			      <div class="flex flex-col space-y-6 pt-6 font-thin text-lg text-start">
			        <router-link to="/about"
                        class="hover:underline hover:underline-offset-2"
                        active-class="text-pristine-light-blue underline underline-offset-4 font-semibold">
                      About Pristine Can
                    </router-link>
                    <router-link to="/services"
                        class="hover:underline hover:underline-offset-2"
                        active-class="text-pristine-light-blue underline underline-offset-4 font-semibold">
                      Services
                    </router-link>
                    <router-link to="/contact"
                        class="hover:underline hover:underline-offset-2"
                        active-class="text-pristine-light-blue underline underline-offset-4 font-semibold">
                      Contact Us
                    </router-link>
			      </div>

                  <div class="pt-12 space-y-4">
                    <!-- <div>
                      <button @click="!showForm" class="bg-pristine-light-blue hover:bg-pristine-light-blue/80 py-2 px-5 text-base rounded">Sign Up</button>
                    </div> -->
                    <div class="w-40">
                      <router-link class="opacity-80" to="/">
			            <img src="/images/clean-prestine-can-logo.svg" />
			          </router-link>
                    </div>
                  </div>
			    </div>
			  </div>
			</div>
		</div>

		<!-- Nav Logo/See New Stock Button/Menu Button -->
         <div class="flex w-full justify-center">
		<div class="w-full max-w-7xl mx-autospace-x-8 text-white flex justify-between items-center top-0 h-14 z-50 absolute py-12 px-4 md:px-6">
			<router-link class="w-32" to="/">
				<img src="/images/clean-prestine-can-logo.svg" />
			</router-link>

			<div class="flex w-full justify-end items-center space-x-8">

			  <div class="hidden md:flex w-full justify-end items-center space-x-6 font-thin text-lg">
			    <router-link to="/about"
                    class="hover:underline hover:underline-offset-2"
                    active-class="text-pristine-light-blue underline underline-offset-4 font-semibold">
                  About
                </router-link>
                <router-link to="/services"
                    class="hover:underline hover:underline-offset-2"
                    active-class="text-pristine-light-blue underline underline-offset-4 font-semibold">
                  Services
                </router-link>
                <router-link to="/contact"
                    class="hover:underline hover:underline-offset-2"
                    active-class="text-pristine-light-blue underline underline-offset-4 font-semibold">
                  Contact
                </router-link>
              </div>

			  <div class="md:hidden flex justify-end items-center space-x-2">
			    <button class="" @click.stop="showMenu = !showMenu">
			      <div class="flex flex-col items-center space-y-[6px] md:space-y-2">
                   <div class="py-px px-3 md:px-4 w-full bg-white"></div>
                   <div class="py-px px-3 md:px-4 w-full bg-white"></div>
                   <div class="py-px px-3 md:px-4 w-full bg-white"></div>
                  </div>
			    </button>
			  </div>
			</div>
		</div>
        </div>

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
	props: { hidden: { type: Boolean, default: false } },
	inject: ['store', 'darkMode'],
	data() {
		return {

			email: null,
			showMenu: false,
            showForm: false,
			links: [
				{ name: `About`, path: `/about` },
				{ name: `Services`, path: `/services` },
				{ name: `Contact`, path: `/contact` },
			],
		}
	},
    methods: {
      openForm() {
        this.showForm = true;
      },
    },
	computed: {

	},
}
</script>
