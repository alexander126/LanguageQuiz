import firestore from '@react-native-firebase/firestore';
import { QuizQuestion } from '../typescript/firestore';

/**
 * getQuestions
 * Function querying firestore questions collection
 * @returns {QuizCollection[]} data
 */
export const getQuestions = async () => {
  try {
    const snapshot = await firestore().collection('questions').get();

    if (snapshot) {
      const data = snapshot.docs.map((question) => ({
        id: question.id,
        ...question.data(),
      }));

      return data as QuizQuestion[];
    }
  } catch (e) {
    throw e;
  }
};
