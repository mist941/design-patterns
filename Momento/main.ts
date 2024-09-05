import {Editor} from './Editor';
import {MementoHandler} from './MementoHandler';

const editor = new Editor();
const mementoHandler = new MementoHandler(editor);
editor.setText("test 1");
mementoHandler.createMemento();
editor.setText("test 2");
mementoHandler.restore(1);
