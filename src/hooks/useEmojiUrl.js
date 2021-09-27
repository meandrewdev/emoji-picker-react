import { useContext } from 'react';
import { PickerContext } from '../lib/reducer';

const useEmojiUrl = unified => {
  const {
    state: { emojiUrl },
  } = useContext(PickerContext);

  return unified ? `${emojiUrl}/${unified}.svg` : emojiUrl;
};

export default useEmojiUrl;
