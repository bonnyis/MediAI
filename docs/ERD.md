# AI문진서비스 ERD

## 1. 개요

AI문진서비스의 데이터베이스는 **Supabase PostgreSQL**을 기반으로 구성한다.

사용자 인증은 **Supabase Auth**를 사용하며, 서비스에서 필요한 추가 사용자 정보는 `profiles` 테이블에서 관리한다.

AI 문진은 하나의 독립적인 문진 세션인 `interviews`를 중심으로 관리한다.

문진 과정에서 발생하는 사용자와 AI의 대화는 `interview_messages`에 저장하며, 문진 완료 후 AI가 생성한 구조화된 요약 정보와 SOAP 형식의 문진 초안은 각각 `patient_summaries`, `soap_notes`에 저장한다.

---

## 2. ERD

```text
auth.users
    │
    │ 1 : 1
    ▼
profiles
    │
    │ 1 : N
    ▼
interviews
    │
    ├────────────── 1 : N ──────────────► interview_messages
    │
    ├────────────── 1 : 1 ──────────────► patient_summaries
    │
    └────────────── 1 : 1 ──────────────► soap_notes
```
