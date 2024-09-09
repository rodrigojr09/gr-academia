export async function retryWithBackoff(
  fn: () => Promise<Response>,
  retries = 5,
  delay = 1000
): Promise<Response> {
  try {
    return await fn(); // Tenta a função fornecida
  } catch (error) {
    if (retries === 0) throw error; // Sem mais tentativas

    const backoff = delay * Math.pow(2, 5 - retries); // Exponential backoff
    console.warn(`Retrying in ${backoff}ms... (${retries} retries left)`);

    await new Promise((resolve) => setTimeout(resolve, backoff)); // Aguarda antes de tentar novamente

    return retryWithBackoff(fn, retries - 1, delay); // Tenta novamente
  }
}
