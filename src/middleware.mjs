// src/middleware.mjs

export const onRequest = async (context, next) => {
  const { request } = context;
  const url = new URL(request.url);

  // Verifica se ci sono parametri UTM nell'URL
  const hasUTM = [...url.searchParams].some(([key]) => key.startsWith("utm_"));

  // Se ci sono parametri UTM, esegui il rewrite alla homepage
  if (hasUTM) {
    return context.rewrite("/");
  }

  // Se non ci sono parametri UTM, continua normalmente
  const response = await next();

  // Gestisci gli errori 404 (opzionale)
  if (response.status === 404) {
    return context.rewrite("/");
  }

  return response;
};
