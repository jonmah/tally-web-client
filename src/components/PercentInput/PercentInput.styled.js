import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;

  input {
    border-radius: 0.3rem 0 0 0.3rem;
    text-align: right;
  }
`
Container.displayName = 'Container'

export const Percent = styled.span`
  align-items: center;
  background: #eee;
  border-bottom: var(--field-border);
  border-right: var(--field-border);
  border-top: var(--field-border);
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  height: 4rem;
  justify-content: center;
  padding: 0.8rem;
  width: 4rem;
`
Percent.displayName = 'Percent'
