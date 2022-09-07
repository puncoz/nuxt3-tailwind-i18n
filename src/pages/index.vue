<template>
    <div>
        <h1 class="underline">Hello World from pages!</h1>

        <ButtonComponent>Test</ButtonComponent>

        <span>{{ $t("welcome") }}</span>

        <div>
            <NuxtLink :to="localePath('index')">{{ $t("home") }}</NuxtLink>

            <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
            <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
            <NuxtLink :to="switchLocalePath('es')">Espain</NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
    import ButtonComponent from "@/components/button-component"

    const localePath = useLocalePath()
    const switchLocalePath = useSwitchLocalePath()
</script>
