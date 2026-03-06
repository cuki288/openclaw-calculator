# Long-Term Memory - SC K

## 2026-03-05 Issues & Observations

### Connectivity Drops Issue (11:45 PM)
**Problem:** 작업 중 작업이 끊기거나 메시지 답장을 하지 않는 경우 발생.

**Potential Causes to Investigate:**
1. **Memory Management:** 메모리 컴팩트/플래시 과정 중 작업 인터럽트 가능성
2. **Ollama Model Loading:** 모델 로딩 지연 또는 연결 불안정
3. **Token Limit:** 33k context limit 에 근접하여 응답 지연 (현재: 28k in)
4. **Session Lifecycle:** 세션 수명 주기 관리 문제

**Investigation Steps:**
- Memory compaction logs 확인 필요
- Ollama 모델 연결 상태 모니터링
- 토큰 소모 패턴 분석
- Session 타임아웃 설정 확인

### Current Status
- Model: ollama/qwen3.5:latest
- Context Usage: 28k/33k (85%) - 높은 사용률은 응답 지연으로 이어질 수 있음
- Runtime: agent:main:main
- Session: active for ~1min

**Action Items:**
- [ ] Memory 컴팩트 로직 개선 필요
- [ ] 토큰 소모 효율성 분석
- [ ] Ollama 연결 안정성 테스트
- [ ] 세션 타임아웃 설정 조정
