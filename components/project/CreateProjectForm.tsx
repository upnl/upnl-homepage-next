// @/components/project/CreateProjectForm.tsx

'use client'

import { useState } from 'react'
import { ContentBox, ContentBoxTitle, ContentBoxFullContent } from '@/components/commons'
import '@/styles/components/project/create-project-form.css'
import SimpleInput from '@/components/create/SimpleInput'
import FormGroup from '@/components/create/FormGroup'

export default function CreateProjectForm() {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [startDate, setStartDate] = useState('')
  const [isPublic, setIsPublic] = useState(false)

  return (
    <ContentBox id="create-project">
      <ContentBoxTitle content="프로젝트 발주" />
      <ContentBoxFullContent>
        <form
          className="new-project-form subbackboard"
          name="Projectform"
          action=""
          method="POST"
          encType="multipart/form-data"
        >
          <div className="new-project-form__inputs">
            {/* #new_project_form_left 검색을 조금 해봤는데 얘가 어떤 태그의 적용을 받는지 안 나옴. id로 검색해보면 flex; flex-diretcion; 만 나옴 */}
            <div className="new-project-form__left">
              <SimpleInput label="프로젝트 이름" required setState={setName} />
              <SimpleInput label="프로젝트 장르" required setState={setGenre} />
              <SimpleInput label="시작 일시" type="date" setState={setStartDate} />

              <FormGroup label="프로젝트 소개" htmlFor="introduction">
                <>
                  <textarea
                    id="introduction"
                    name="introduction"
                    maxLength={200}
                    required
                    style={{ overflow: 'hidden' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      display: 'none',
                      overflowWrap: 'break-word',
                      whiteSpace: 'pre-wrap',
                      border: '0.625px solid #ccc',
                      fontWeight: 400,
                      width: 229.75,
                      fontFamily:
                        '나눔고딕, NanumGothic, "맑은 고딕", "Malgun Gothic", 돋움, Dotum, 애플고딕, AppleGothic, sans-serif',
                      lineHeight: '20px',
                      fontSize: '14px',
                      padding: '4px 6px',
                    }}
                  >
                    &nbsp;
                  </div>
                </>
              </FormGroup>

              <FormGroup label="글자수" htmlFor="length">
                <input type="text" id="length" readOnly value="0/200" />
              </FormGroup>
            </div>

            <div className="new-project-form__right">
              <FormGroup label="공개" htmlFor="public">
                <input
                  id="public"
                  name="public"
                  type="checkbox"
                  value="y"
                  onChange={(e) => setIsPublic(e.target.checked)}
                />
              </FormGroup>

              <FormGroup label="썸네일" htmlFor="file" className="thumbnail_label">
                <>
                  <div className="thumbnail">
                    <img id="preview" src="http://placehold.it/128x128" />
                  </div>
                  <div>
                    <input id="text_input" type="text" readOnly />
                    <div id="file_input_textbox">
                      <input type="button" value="파일 선택" id="file_input_button" />
                      <input id="thumbnail" name="thumbnail" type="file" />
                    </div>
                  </div>
                </>
              </FormGroup>
            </div>
          </div>

          <input id="allowed" name="allowed_ext" required type="hidden" value="Y" />

          <div className="write">
            <button name="submit">발주하기</button>
          </div>
        </form>
      </ContentBoxFullContent>
    </ContentBox>
  )
}