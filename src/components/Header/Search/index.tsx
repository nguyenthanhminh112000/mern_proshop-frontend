import React from 'react';
import { Formik, Form, Field } from 'formik';
import { SearchInput, SearchForm, SearchButton } from './styles';
import { useTranslations } from '~/utils/intlTools';

import * as Yup from 'yup';

const index = () => {
  const [header_search_placeholder] = useTranslations([
    'header_search_placeholder',
  ]);

  return (
    <Formik initialValues={{ searchValue: '' }} onSubmit={() => {}}>
      {(formik) => (
        <SearchForm>
          <SearchInput
            name="searchValue"
            type="text"
            placeholder={header_search_placeholder}
          />
          <SearchButton>Search</SearchButton>
        </SearchForm>
      )}
    </Formik>
  );
};

export default index;