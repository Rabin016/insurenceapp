/**
 * Module declarations for various image file formats.
 *
 * These declarations allow TypeScript to recognize and understand how to handle imports of
 * image files (png, jpg, jpeg, gif, svg). They define the type of the imported value as 'any',
 * which means it can be used in a flexible manner within the application.
 *
 * Each module is associated with a default export value, allowing for easy import and use within the code.
 */

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}
