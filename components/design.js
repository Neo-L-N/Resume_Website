export function inkTheme(isDark) {
  return {
    page: isDark
      ? 'min-h-screen modern-page bg-[#181818] text-neutral-50'
      : 'min-h-screen modern-page bg-white text-black',
    header: isDark
      ? 'sticky top-0 z-20 border-b border-white/12 bg-[#202020]/85 backdrop-blur-xl'
      : 'sticky top-0 z-20 border-b border-black/10 bg-white/80 backdrop-blur-xl',
    heading: isDark
      ? 'section-title text-neutral-50 border-white/20'
      : 'section-title text-black border-black/15',
    subheading: isDark ? 'text-neutral-50' : 'text-black',
    body: isDark ? 'text-neutral-200' : 'text-neutral-700',
    muted: isDark ? 'text-neutral-400' : 'text-neutral-500',
    strong: isDark ? 'text-white' : 'text-neutral-900',
    accent: isDark ? 'text-neutral-50' : 'text-black',
    rule: isDark ? 'border-white/16' : 'border-black/10',
    card: isDark
      ? 'ink-card bg-[#242424]/85 border-white/14 shadow-black/20'
      : 'ink-card bg-white/75 border-black/10 shadow-black/[0.06]',
    chip: isDark
      ? 'ink-chip bg-white/[0.08] text-neutral-100 border-white/18 hover:bg-white/[0.13]'
      : 'ink-chip bg-black/[0.03] text-black border-black/15 hover:bg-black/[0.07]',
    button: isDark
      ? 'border-white/18 bg-white/[0.07] text-neutral-100 hover:bg-white/[0.13] hover:text-white'
      : 'border-black/15 bg-white/70 text-black hover:bg-black hover:text-white',
    primaryButton: isDark
      ? 'bg-neutral-100 text-neutral-950 hover:bg-white'
      : 'bg-black text-white hover:bg-neutral-800',
    input: isDark
      ? 'bg-[#1f1f1f] border-white/18 text-neutral-50 placeholder:text-neutral-500'
      : 'bg-white border-black/15 text-black placeholder:text-neutral-400',
    dialog: isDark
      ? 'bg-[#202020] border-white/18 text-neutral-50'
      : 'bg-white border-black/15 text-black',
    timelineDot: isDark
      ? 'bg-[#242424] border-white/24 text-neutral-50'
      : 'bg-white border-black/20 text-black',
  };
}
