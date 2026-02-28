/**
 * Arrow function that scrolls down the page a certain amount of vh units with a smooth scroll behavior
 * @param vhsUnits how much vh units you want to scroll down
 * @author Oriol Plazas León
 * @since 28/02/2026
 */
export const scrollDown = (vhsUnits: number): void => {
  const VH = vhsUnits * window.innerHeight / 100;
    window.scrollBy({
      top: VH,
      left: 0,
      behavior: 'smooth'
    });
}