<script lang="ts">

export let classes: string = "";
const classesToUse = classes ? classes : "w-6 h-6";
</script>

<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      class={classesToUse}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
        d="M6 8h12M6 12h12M6 16h12"
      ></path>
    </svg>