<template>
  <main class="min-h-screen">
    <div
      className="
      prose
      dark:prose-invert
      prose-blockquote:not-italic
      prose-img:ring-1
      prose-img:ring-gray-200
      dark:prose-img:ring-white/10
      prose-img:rounded-lg
      "
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
