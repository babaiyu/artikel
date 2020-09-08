import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import getConfig from 'next/config';
import _ from 'lodash';
import {Editor} from '@tinymce/tinymce-react';
import {LayoutAdmin} from 'components';

const Form = () => {
  // Config
  const {publicRuntimeConfig} = getConfig();
  const {TINY_MCE_KEY} = publicRuntimeConfig;
  const router = useRouter();
  const paramTitle = _.result(router.query, 'title', '');

  // State
  const [title, setTitle] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formImage, setFormImage] = useState('');
  const [content, setContent] = useState();

  // Life Cycle
  useEffect(() => {
    if (title === '') {
      setTitle(paramTitle);
    }
  }, [paramTitle]);

  // Function
  const handleEditorChange = (e: any) => {
    setContent(e);
    console.log(e);
  };

  // Render
  return (
    <LayoutAdmin
      title={title === 'new' ? 'Tulis Artikel Baru' : 'Edit Artikel'}
      activeNum={0}>
      <Editor
        apiKey={TINY_MCE_KEY}
        onEditorChange={handleEditorChange}
        init={{
          height: 750,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | h2 h4 | bold italic underline | \
             link image | blockquote | \
             alignleft aligncenter alignright alignjustify | \
             bullist outdent indent | removeformat',
          toolbar_sticky: true,
        }}
      />
    </LayoutAdmin>
  );
};

export default Form;
