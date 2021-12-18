const convertBytesToMegaBytes = (fileSizeInBytes) => {
  const fileSizeInMegaBytes = fileSizeInBytes / (1024 * 1024);
  return fileSizeInMegaBytes;
};

const MAX_IMAGE_FILE_SIZE = 5;

export { convertBytesToMegaBytes, MAX_IMAGE_FILE_SIZE };
