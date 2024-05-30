<!-- eslint-disable vue/multi-word-component-names -->
<template>
        <div class=" border-b ">
            <div class=" flex justify-center items-center">
              <RouterLink to="/" as="a" class=" pr-10">
                <img src="https://picsum.photos/200?random=1" alt="Logo" class=" rounded-full w-12 " />
              </RouterLink>
              <!-- Our link container -->
              <div class="flex text-2xl space-x-2 h-12 justify-center items-center">
                <HeaderLink to="/begin" text="Begin"/>
                <HeaderLink to="/sales" text="Sales"/>
                <HeaderLink to="/solutions" text="Solutions" />
                <HeaderLink to="/photos" text="Photos" />
                <HeaderLink to="/about-us" text="About us"/>
                <HeaderLink to="/contact" text="Contact" />
              </div>
            </div>
          </div>
</template>
<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header'
}

</script>
