const { createApp } = Vue
const isValidInput = (char) => /\d/.test(char);

createApp({
  data() {
    return {
      activeIndex: null,
      creatorsForm: false,
      accordionItems: [
        { title: 'Quantos produtos serão enviados? Precisa devolver?',
          content: 'Será enviado pelo menos 1 produto mensal, não é necessária a devolução.' },
        { title: 'Como funciona o comissionamento?',
          content: 'Saiba todas as regras de comissionamento neste link: <a href="https://learning.br.aliexpress.com/course/learn?id=2623&type=video&spm=courserlist_courses.4.0">Programa de Afiliados do AliExpress</a>' },
        { title: 'Qual o critério de avaliação dos conteúdos para a bonificação?',
          content: 'Criatividade, performance, engajamento, entrega completa de acordo com o briefing, agilidade, retorno em vendas, entre outros.' },
        { title: 'Haverá um cronograma de postagem pré-definido?',
          content: 'Sim, ela será compartilhada com os criadores a cada briefing enviado.' },
        { title: 'A participação nas aulas é obrigatória? Será calculada a frequência?',
          content: 'A participação é recomendada, mas não obrigatória. As aulas também ficarão gravadas para o consumo posterior, caso você não consiga assistir ao vivo.' },
        { title: 'O pagamento está vinculado à performance apenas ou tem um valor fixo? Como é feito o pagamento?',
          content: 'O pagamento de comissionamento é vinculado à performance. O pagamento dos desafios tem um valor fixo que será enviado junto ao briefing. O pagamento é realizado através de invoice internacional e você recebe na conta indicada na plataforma da Creators.llc, na área de dados bancários.' },
        { title: 'Vou precisar ter exclusividade com a AliExpress ou posso indicar produtos da concorrência?',
          content: 'Não há exclusividade, mas quanto mais produtos da mesma plataforma você indicar, melhores são as suas chances de monetização.' },
        { title: 'Qual a duração do projeto?',
          content: 'Não há previsão de encerramento, enquanto você entregar conteúdos no programa, o comissionamento estará ativo.' },
      ],
      items: [
        {
          numbers: "assets/mask-boy.svg",
          title: "Produtos",
          image: "assets/Group527.png",
          description: "Já pensou em aprender sobre criação de conteúdo <br> com um super time da <strong>L'Oreal</strong> Grande Público? <br/> <br/> Nosso programa exclusivo é projetado para <br> equipar você com as ferramentas e técnicas necessárias para se destacar no mundo digital e impulsionar resultados impactantes através de conteúdo envolvente.",
        },
      ],
      cards: [
        {
          numbers: "01",
          description: "Posicionamento estratégico e performance",
        },
        {
          numbers: "02",
          description: "Identidade visual <br> no conteúdo",
        },
        {
          numbers: "03",
          description: "Contando história <br> através  de ganchos",
        },
        {
          numbers: "04",
          description: "Técnicas de edição de vídeos, takes e cortes",
        },
        {
          numbers: "05",
          description: "Como identificar e metrificar seus resultados",
        },
      ],
      itemsWork: [
        {
          image: "assets/Group544.png",
          description: "Ser um criador de conteúdo com pelo menos 5 mil seguidores no Instagram, com postagens regulares e de uma das verticais abaixo: <br><br> <li><strong>Moda e Beleza</strong></li> <li><strong>Tecnologia e Games</strong></li> <li><strong>Esporte e Fitness</strong></li> <li><strong>Casa e Decoração</strong></li> "
        }
      ],
      itemsMiniCard: [
        { content: 'Você precisará criar 2 Reels, 1 repost no TikTok e 5 Combos de Stories (3 telas cada).' },
        { content: 'Inscrever-se através do site Creators.llc/AliExperts e não deixar nenhum campo em branco, eles serão necessários para a nossa validação.' },
        { content: 'Ter disponibilidade para participar do programa e entregar conteúdos conforme cronograma de postagens.' },
        { content: 'Caso você seja aprovado, é obrigatório o opt-in das suas redes sociais para analisarmos os resultados das postagens.' },
      ],
      tutors: [
        {
          image: "assets/Group155.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem  nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group156.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group157.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group155.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group155.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group155.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
      ],
      formData: {
        name: "",
        email: "",
        password: "",
        phone: "",
        perfil: "",
        origin: "aliexperts",
        date_subscription: "",
        specialities: [],
        validacaoRedes: [
          { socialMedia: '', link: '' }
        ]
      },
      passwordStrength: '',
      showingTooltip: false,
      isLoading: false,
      success: '',
      error: '',
      selectedCount: 0,      
      selectedSocialMedia: '',
      socialMediaInput: '',
      showAllFields: true,
      
      vertical: [
        { name: "Beleza", id: 263 },
        { name: "Casa", id: 306 },
        { name: "Decoração", id: 307 },
        { name: "Esporte", id: 305 },
        { name: "Fitness", id: 264 },
        { name: "Games", id: 362 },
        { name: "Moda", id: 323 },
        { name: "Tecnologia", id: 368 },
    ],    
    }
  },
 
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },

    formatTelefone() {
      this.formData.phone = this.formData.phone.replace(/\D/g, ''); 
      let phoneNumber = this.formData.phone;
    
      if (phoneNumber.length >= 2) {
        this.formData.phone = `(${phoneNumber.substring(0, 2)}`;
      }
    
      if (phoneNumber.length > 2) {
        this.formData.phone += `) ${phoneNumber.substring(2, 7)}`;
      }
    
      if (phoneNumber.length > 7) {
        this.formData.phone += `-${phoneNumber.substring(7, 11)}`;
      }
    },

    checkPasswordStrength() {
      const password = this.formData.password;
      if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
        this.passwordStrength = 'Forte';
      } else if (password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
        this.passwordStrength = 'Média';
      } else {
        this.passwordStrength = 'Fraca';
      }
    },
    
    showTooltip() {
      this.showingTooltip = true;
    },

    hideTooltip() {
      this.showingTooltip = false;
    },
  
    updateSelectedCount() {
      this.selectedCount = this.formData.specialities.length;
    },

    formLogin() {
      this.error = "";
      this.success = "";
      this.isLoading = true;
    
      fetch('https://creators.llc/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(this.formData),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            this.error = 'Ocorreu um erro no login. Por favor, verifique se o e-mail e senha estão corretos.';
          }
          this.isLoading = false;
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          if(data.data.user && data.data.user.date_subscription == null){
            const now = new Date();
            const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
            this.formData.date_subscription = formattedDate;

            this.formUpdateUser(data.data.access_token, data.data.user.id);
          }else{
            this.isLoading = false;
            this.success = "E-mail já inscrito!";
          }
        }
      })
      .catch(error => {
        this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
        this.isLoading = false;
      });
    },
    
    formUpdateUser(token, id) {
      this.formData.validacaoRedes.forEach(element => {
        this.formData[element.socialMedia] = this.getBaseLink(element.socialMedia) + element.link;
      });
      console.log(this.formData)
      fetch('https://creators.llc/api/v1/users/'+id, {
          method: 'PUT',
          body: JSON.stringify(this.formData),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          }
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao atualizar usuário');
          }
          return response.json(); 
      })
      .then(data => {
          if(data.error) {
              this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
              this.isLoading = false;
          } else if(!data.error) {
            this.success = 'Inscrição efetuada com sucesso!';
            this.isLoading = false;

            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
      })
      .catch(error => {
          console.error('Erro na solicitação:', error);
      });
    },

    formForgot(){
      if(this.formData.email == "") {
        this.error = 'Preencha um email válido';
      }else{
        const requestBody = {
          email: this.formData.email
        };

        fetch('https://creators.llc/api/password/create', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
              'Content-Type': 'application/json',
          }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao atualizar usuário');
            }
            return response.json();
        })
        .then(data => {
          if (data.data && data.data.message) {
              const successMessage = data.data.message;
              this.success = successMessage;
          } else {
              throw new Error('Resposta do servidor incompleta ou sem mensagem');
          }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
      }
    },

    formCreateUser() {
      this.error = "";
      this.success = "";

      this.validadeRedes()

      if(this.selectedCount >= 2 && this.validadeRedes()) {
        this.isLoading = true;

        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        this.formData.date_subscription = formattedDate;

        fetch('https://creators.llc/api/v1/users', {
            method: 'POST',
            body: JSON.stringify(this.formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao criar usuário');
            }
            return response.json();
        })
          .then(data => {
            
          if(data.error) {
            if (data.error.email) {
              if (Array.isArray(data.error.email) && data.error.email.length > 0) {
                const errorMessage = data.error.email[0];
                this.error = errorMessage;
              }
            }else{
              this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
            }
            this.isLoading = false;
          } else {
            this.formUpdateUser(data.data.access_token, data.data.user.id);
          }
        })
      }else{
        if(this.selectedCount < 1) {
          this.error = 'É necessário selecionar no mínimo 2 verticais do seu conteúdo.';
        }else {
          this.error = 'É necessário selecionar no mínimo 1 rede.';
        }
      }
    },

    validadeRedes() {
      if(Array.isArray(this.formData.validacaoRedes) && this.formData.validacaoRedes.length > 0) {
        const primeiroElemento = this.formData.validacaoRedes[0];
        const socialMediaVazia = primeiroElemento.socialMedia.trim() === '';
        const linkVazio = primeiroElemento.link.trim() === '';
        
        if (socialMediaVazia || linkVazio) {
          return false
          
        } 
      } else {
          return false
      }
      return true
    },

    toggleReturn() {
      this.error = "";
      this.success = "";
    },

    toggleFieldsVisibility() {
      this.error = "";
      this.success = "";
      this.showAllFields = !this.showAllFields;
    },

    addSocialMedia() {
      if (this.formData.validacaoRedes.length < 2) {
        this.formData.validacaoRedes.push({ socialMedia: '', link: '' });
      }
    },

    removeSocialMedia() {
      if (this.formData.validacaoRedes.length > 1) {
        this.formData.validacaoRedes.pop();
      }
    },

    getBaseLink(socialMedia) {
      if (socialMedia === 'instagram') {
        return 'https://www.instagram.com/';
      } else if (socialMedia === 'youtube') {
        return 'https://www.youtube.com/';
      } else if (socialMedia === 'tikTok') {
        return 'https://www.tiktok.com/';
      }
      return '';
    },
  },

  computed: {
    selectedVerticals() {
      const selectedIds = this.formData.specialities.map(Number);
      return this.vertical.filter((v) => selectedIds.includes(v.id));
    },
    isValid() {
      const vertical = this.selectedCount >= 2;
      const redes = this.formData.validacaoRedes.length >= 1;


      return [vertical, redes];
    }
  },

  
}).mount('#app')