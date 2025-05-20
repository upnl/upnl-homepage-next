'use client'

import React from 'react'
import '@/styles/components/project/create-project-form.css'

/**
 * @file SimpleInput.tsx
 * @description 라벨이 있는 단일 입력 필드를 출력하는 컴포넌트. 라벨과 입력란의 크기 조절 가능.
 * 
 * @author Serius <tomskang@naver.com>
 * @lastModified 2025-05-18
 * 
 * @component
 * @param {string} label - 입력 필드 앞에 표시될 라벨
 * @param {string} [type='text'] - 입력 필드의 타입
 * @param {string} [placeholder=''] - placeholder 텍스트
 * @param {boolean} [required=false] - 필수 입력 여부
 * @param {(value: string) => void} setState - 입력값을 상위 컴포넌트 상태로 전달하는 함수
 * @param {number} [labelWidth=100] - 라벨 너비 (단위: px)
 * @param {number} [inputWidth] - 입력 필드 너비 (단위: px)
 * 
 * @note
 * CSS 클래스는 `control-group`, `control-label`, `control-input`으로 구성됨.
 * 기존 프로젝트의 CSS(class: group, label 등)와 중복되는 이름을 피하기 위해 네이밍을 변경함.
 * New Study 프로젝트와 중복되는 Python Form 구조를 재활용하기 위한 선택이며,
 * 커스터마이징을 용이하게 하기 위해 `control-group`에 flex 속성을 도입함.
 */

type SimpleInputProps = {
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  setState: (value: string) => void
  labelWidth?: number // unit = px
  inputWidth?: number // unit = px
}

export default function SimpleInput({
  label,
  type = 'text',
  placeholder = '',
  required = false,
  setState,
  labelWidth = 100,
  inputWidth,
}: SimpleInputProps) {
  return (
    <div className="control-group">
      <label className="control-label" style={{ width: `${labelWidth}px` }}>{label}</label>
      <input
        className="control-input"
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={(e) => setState(e.target.value)}
        style={inputWidth !== undefined ? { width: `${inputWidth}px` } : undefined}
      />
    </div>
  )
}
