export type RGBColor = {
  /** int 0-255 */
  r: number;
  /** int 0-255 */
  g: number;
  /** int 0-255 */
  b: number;
  /** float 0-1 */
  a?: number;
};
export type HexColor = string;

/**
 * 將十六進制顏色代碼轉換為RGB顏色對象。
 * @param hex - 十六進制顏色代碼，例如 "#RGB"、"#RGBA"、"#RRGGBB"或"#RRGGBBAA"。
 * @returns RGB顏色對象，或者在不合法輸入時拋出錯誤。
 */
export function convertHexToRGBColor(hex: HexColor): RGBColor {
  if (hex.startsWith("#")) hex = hex.substring(1);
  if (/^[0-9A-Fa-f]{8}$/.test(hex)) {
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16),
      a: parseInt(hex.substring(6, 8), 16),
    };
  } else if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16),
      a: 255,
    };
  } else if (/^[0-9A-Fa-f]{4}$/.test(hex)) {
    return {
      r: parseInt(hex.substring(0, 1), 16) * 17,
      g: parseInt(hex.substring(1, 2), 16) * 17,
      b: parseInt(hex.substring(2, 3), 16) * 17,
      a: parseInt(hex.substring(3, 4), 16) * 17,
    };
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    return {
      r: parseInt(hex.substring(0, 1), 16) * 17,
      g: parseInt(hex.substring(1, 2), 16) * 17,
      b: parseInt(hex.substring(2, 3), 16) * 17,
      a: 255,
    };
  }
  throw new Error(`Invalid hex color format: ${hex}`);
}
